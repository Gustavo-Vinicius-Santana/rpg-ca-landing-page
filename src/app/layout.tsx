import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/ui/templates/Header";
import Footer from "@/ui/templates/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RPG Combat Assistant",
  description: "Site oficial do RPG DM Combat Assistant, um app para facilitar o gerenciamento de combates.",

  keywords: ["RPG", "Combate", "DM", "Ferramenta de RPG", "RPG DM Combat Assistant", "RPG Combat Assistant"],

  openGraph: {
    title: "RPG Combat Assistant",
    description: "Site oficial do RPG DM Combat Assistant.",

    url: "https://rpg-combat-assistant.vercel.app/",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "RPG Combat Assistant",
      },
    ],

    siteName: "RPG Combat Assistant",
    locale: "pt_BR",

    type: "website",
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

        <Footer linkEmail="mailto:gus.tec.dev@gmail.com" linkLinkedin="https://www.linkedin.com/in/gustavo-vinicius-596005276/" />
      </body>
    </html>
  );
}
