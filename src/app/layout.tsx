import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import GeminiChatbot from "./components/GeminiChatbot";

// Google Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
  title: "EarthConn Travels | IT Solutions & AI Automation",
  description:
    "EarthConn Travels provides IT project development, AI automation solutions, digital marketing services, web development, mobile app development, and business technology solutions.",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
       <head>
        <link rel="icon" href="/images/logo.png" type="website-icon" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>      
      <body className="m-0 p-0 box-border">
        <NavigationBar />
        <CookieConsent />
        <GeminiChatbot />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
 