import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to discuss your project. I build production-ready web applications, mobile apps, AI solutions, and enterprise integrations.",
  openGraph: {
    title: "Contact | Leandros Dimitriadis",
    description:
      "Get in touch to discuss your project. Custom software solutions for modern businesses.",
    url: "https://leandrosdim.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}