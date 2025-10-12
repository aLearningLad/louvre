import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ralewayFont = Raleway({
  variable: "--raleway-font",
  subsets: ["latin"],
  weight: ["200"],
});

export const metadata: Metadata = {
  title: "louvre",
  description: "Thato's Personal Portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ralewayFont.variable} antialiased`}>{children}</body>
    </html>
  );
}
