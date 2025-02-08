import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/ui/templates/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rpg combat assistant",
  description: "Site do aplicativo rpg dm combat assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header 
        home="/" 
        versions="/pages/versions" 
        devlog="/pages/devlog" 
        contact="/pages/contact" 
        download="/pages/download" 
        collaborate="/pages/collaborate" 
      />

        <main className="">
          {children}
        </main>
        
      </body>
    </html>
  );
}
