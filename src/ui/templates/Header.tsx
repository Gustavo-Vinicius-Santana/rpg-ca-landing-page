"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

import "@/app/globals.css";

type HeaderProps = {
  home: string;
  versions: string;
  devlog: string;
  contact: string;
  download: string;
  collaborate: string;
};

export default function Header({
  home,
  versions,
  devlog,
  contact,
  download,
  collaborate,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="bg-black fixed top-0 left-0 w-full flex items-center justify-between p-4 border-b border-white z-10">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2 cursor-pointer">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
            <Link href={home}>
              <h1 className="font-bold text-2xl md:text-3xl">RPG CA</h1>
            </Link>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center">
            <ul className="flex gap-8">
              {[
                { href: home, label: "Home" },
                { href: versions, label: "Versões" },
                { href: devlog, label: "Devlog" },
                { href: contact, label: "Contatos" },
              ].map((item) => (
                <li key={item.href} className="text-2xl relative group">
                  <Link
                    href={item.href}
                    className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500"
                  >
                    {item.label}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href={download}>
            <button className="bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 hover:scale-105 transition duration-200 text-sm md:text-base">
              <p className="font-semibold">Download</p>
            </button>
          </Link>

          <Link href={collaborate}>
            <button className="bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 hover:scale-105 transition duration-200 text-sm md:text-base">
              <p className="font-semibold">Colabore</p>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-white text-3xl" onClick={toggleMenu}>
            {isMenuOpen ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
          </button>
        </div>
      </header>

      {/* Lateral Menu */}
      <div className={`fixed top-[64px] left-0 w-full bg-black p-4 md:hidden flex flex-col items-center gap-4 z-20 transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex flex-col gap-4">
          {[
            { href: home, label: "Home" },
            { href: versions, label: "Versões" },
            { href: devlog, label: "Devlog" },
            { href: contact, label: "Contato" }
          ].map((item) => (
            <li key={item.href} className="text-xl">
              <Link
                href={item.href}
                className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500"
                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}