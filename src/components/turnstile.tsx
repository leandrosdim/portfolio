"use client";

import {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

export interface ITurnstileHandle {
  execute: () => void;
  reset: () => void;
}

interface ITurnstileProps {
  siteKey: string;
  onVerify: (token: string) => void;
  onError?: (error: string) => void;
  onExpired?: () => void;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: Record<string, unknown>
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
    onTurnstileLoad?: () => void;
  }
}

const Turnstile = forwardRef<ITurnstileHandle, ITurnstileProps>(
  function Turnstile({ siteKey, onVerify, onError, onExpired }, ref) {
    const widgetIdRef = useRef<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const onVerifyRef = useRef(onVerify);
    const onErrorRef = useRef(onError);
    const onExpiredRef = useRef(onExpired);
    const scriptLoadedRef = useRef(false);
    const pendingExecRef = useRef(false);
    const doRenderRef = useRef<() => void>(() => {});

    useEffect(() => {
      onVerifyRef.current = onVerify;
      onErrorRef.current = onError;
      onExpiredRef.current = onExpired;
    }, [onVerify, onError, onExpired]);

    useEffect(() => {
      doRenderRef.current = () => {
        if (!window.turnstile || !containerRef.current) return;

        if (widgetIdRef.current) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          appearance: "always",
          callback: (token: string) => {
            onVerifyRef.current(token);
          },
          "error-callback": () => {
            onErrorRef.current?.("Turnstile error");
          },
          "expired-callback": () => {
            onExpiredRef.current?.();
          },
        });
      };
    }, [siteKey]);

    useImperativeHandle(ref, () => ({
      execute: () => {
        if (scriptLoadedRef.current && window.turnstile) {
          if (widgetIdRef.current) {
            window.turnstile.reset(widgetIdRef.current);
          } else {
            doRenderRef.current();
          }
        } else {
          pendingExecRef.current = true;
        }
      },
      reset: () => {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current);
        }
      },
    }));

    useEffect(() => {
      if (window.turnstile) {
        scriptLoadedRef.current = true;
        if (pendingExecRef.current) {
          pendingExecRef.current = false;
          doRenderRef.current();
        }
        return;
      }

      window.onTurnstileLoad = () => {
        scriptLoadedRef.current = true;
        if (pendingExecRef.current) {
          pendingExecRef.current = false;
          doRenderRef.current();
        }
      };

      const script = document.createElement("script");
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);

      return () => {
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
        scriptLoadedRef.current = false;
      };
    }, []);

    return (
      <div
        ref={containerRef}
        className="min-h-[65px] flex justify-center items-center"
      />
    );
  }
);

export default Turnstile;