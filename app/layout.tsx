import type { Metadata } from "next";
import { Geist, Geist_Mono, Raleway } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

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
  weight: ["400"],
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
      <body className={`${ralewayFont.variable} antialiased`}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              fontSize: 14,
              color: "black",
            },
            success: {
              duration: 4000,
              iconTheme: {
                primary: "green",
                secondary: "white",
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: "red",
                secondary: "white",
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
