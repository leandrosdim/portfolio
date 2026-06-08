import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Leandros Dimitriadis | Software Engineer & Business Technology Consultant",
    template: "%s | Leandros Dimitriadis",
  },
  description:
    "Building web applications, mobile apps, AI solutions & enterprise integrations. 7+ years delivering production-ready systems for modern businesses.",
  metadataBase: new URL("https://leandrosdim.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://leandrosdim.com",
    siteName: "Leandros Dimitriadis",
    title: "Leandros Dimitriadis | Software Engineer & Business Technology Consultant",
    description:
      "Building web applications, mobile apps, AI solutions & enterprise integrations. 7+ years delivering production-ready systems for modern businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leandros Dimitriadis | Software Engineer & Business Technology Consultant",
    description:
      "Building web applications, mobile apps, AI solutions & enterprise integrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leandros Dimitriadis",
    url: "https://leandrosdim.com",
    jobTitle: "Software Engineer & Business Technology Consultant",
    description:
      "Building web applications, mobile apps, AI solutions & enterprise integrations.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thessaloniki",
      addressCountry: "GR",
    },
    sameAs: [
      "https://github.com/leandrosdim",
      "https://linkedin.com/in/leandros-dimitriadis-648765179",
    ],
    knowsAbout: [
      "Web Development",
      "Mobile Development",
      "AI Solutions",
      "Enterprise Integration",
      "Solution Architecture",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-bg text-brand-text-primary antialiased">
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}