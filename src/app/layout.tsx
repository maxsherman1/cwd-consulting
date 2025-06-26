import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ErrorBoundary from "../components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CWD Consulting",
  description: "Empowering your business through expert consulting.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/images/cwd_logo.png" type="image/png" />
      </head>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="flex-grow">
          <ErrorBoundary>{children}</ErrorBoundary>
        </main>
        <Footer />
      </body>
    </html>
  );
}
