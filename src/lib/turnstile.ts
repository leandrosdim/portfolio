interface ITurnstileVerifyResponse {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
}

export async function verifyTurnstileToken(
  token: string,
  secretKey: string
): Promise<{ success: boolean; error?: string }> {
  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    }
  );

  const data: ITurnstileVerifyResponse = await response.json();

  if (data.success) {
    return { success: true };
  }

  return {
    success: false,
    error: data["error-codes"]?.join(", ") || "Turnstile verification failed",
  };
}