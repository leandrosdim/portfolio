import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Full-Stack Developer",
  description: "Personal portfolio of a Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-slate-100 transition-colors duration-300`}
      >
        <header className="border-b border-[light-dark(#9ca3af,transparent)] bg-white/60 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold text-gray-900 dark:text-slate-100">
                Portfolio
              </Link>
              <div className="flex items-center space-x-6">
                <Link href="/" className="text-gray-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300 transition-colors">
                  Home
                </Link>
                <Link href="/projects" className="text-gray-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300 transition-colors">
                  Projects
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-300 transition-colors">
                  Contact
                </Link>
                <ThemeToggle />
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-gray-200 dark:border-slate-700 mt-12 py-6">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-slate-400">
            <p>© {new Date().getFullYear()} Leandros Dimitriadis Portfolio. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}