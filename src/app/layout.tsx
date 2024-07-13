"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { MobileMenu } from "@/components/Navbar/MobileMenu";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import Footer from "@/components/Footer/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Manuel Latorre",
  description: "Desarrollador Web Fullstack",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta property="og:image" content="https://postimg.cc/zVJCzqRK" />
      <body className={`${inter.className}`}>
        <BackgroundGradientAnimation>
          <div className="absolute z-50 inset-0 overflow-y-scroll">
            <LanguageProvider>
              <Navbar />
              <MobileMenu />
              {children}
              <Footer />
            </LanguageProvider>
          </div>
        </BackgroundGradientAnimation>
      </body>
    </html>
  );
}
