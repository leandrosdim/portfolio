import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Full-Stack Developer",
  description: "Get in touch with me for collaboration opportunities",
  openGraph: {
    title: "Contact | Full-Stack Developer",
    description: "Get in touch with me for collaboration opportunities",
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Full-Stack Developer",
    description: "Get in touch with me for collaboration opportunities",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}