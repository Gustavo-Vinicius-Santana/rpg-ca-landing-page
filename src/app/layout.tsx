import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Image from 'next/image';
import Link from 'next/link'

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
        <header className="flex items-center justify-between p-4">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="logo" width={50} height={50} />
              <h1 className="font-bold text-3xl">RPG CA</h1>
            </div>

            <div className="flex items-center">
              <ul className="flex gap-8">
                <li className=" text-2xl"><Link href="/">Home</Link></li>
                <li className="text-2xl"><Link href="/pages/versions">Versões</Link></li>
                <li className="text-2xl"><Link href="/pages/devlog">Devlog</Link></li>
                <li className="text-2xl"><Link href="/pages/contact">Contato</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-4">

            <Link href="/pages/download">
              <button className="bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 hover:scale-105 transition duration-200">
                <p className="text-sm font-semibold">Download</p>
              </button>

            </Link>

            <Link href="/pages/collaborate">
              <button  className="bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 hover:scale-105 transition duration-200">
                <p className="text-sm font-semibold">Colabore</p>
              </button>
            </Link>
          </div>
        </header>

        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}
