"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
            <h1 className="font-bold text-3xl">RPG CA</h1>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center">
            <ul className="flex gap-8">
              <li className="text-2xl relative group">
                <Link
                  href={home}
                  className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500"
                >
                  Home
                  <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-2xl relative group">
                <Link
                  href={versions}
                  className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500"
                >
                  Versões
                  <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-2xl relative group">
                <Link
                  href={devlog}
                  className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500"
                >
                  Devlog
                  <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-2xl relative group">
                <Link
                  href={contact}
                  className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500"
                >
                  Contato
                  <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
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
        <div className="md:hidden flex items-center">
          <button
            className="text-white text-3xl"
            onClick={toggleMenu} // Alterna o estado do menu
          >
            {isMenuOpen ? (
              // Ícone de "X"
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Ícone de menu hamburguer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Lateral Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-black p-4 md:hidden flex flex-col items-center gap-4 z-20 transition-all duration-300 ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col gap-4">
          <li className="text-xl">
            <Link
              href={home}
              className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500"
            >
              Home
            </Link>
          </li>
          <li className="text-xl">
            <Link
              href={versions}
              className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500"
            >
              Versões
            </Link>
          </li>
          <li className="text-xl">
            <Link
              href={devlog}
              className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500"
            >
              Devlog
            </Link>
          </li>
          <li className="text-xl">
            <Link
              href={contact}
              className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500"
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}