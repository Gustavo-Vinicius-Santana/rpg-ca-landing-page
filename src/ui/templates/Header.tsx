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

export default  function Header({ home, versions, devlog, contact, download, collaborate }: HeaderProps) {
    return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 border-b border-white">
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
          <h1 className="font-bold text-3xl">RPG CA</h1>
        </div>

        <div className="flex items-center">
          <ul className="flex gap-8">
            <li className="text-2xl relative group">
              <Link href={home} className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500">
                Home
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="text-2xl relative group">
              <Link href={versions} className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500">
                Versões
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="text-2xl relative group">
              <Link href={devlog} className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500">
                Devlog
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
            <li className="text-2xl relative group">
              <Link href={contact} className="block pb-1 relative transition-colors duration-300 hover:text-yellow-500">
                Contato
                <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link href={download}>
          <button className="bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 hover:scale-105 transition duration-200">
            <p className="text-sm font-semibold">Download</p>
          </button>
        </Link>

        <Link href={collaborate}>
          <button className="bg-white text-black px-4 py-2 rounded-md shadow-sm hover:bg-gray-100 hover:scale-105 transition duration-200">
            <p className="text-sm font-semibold">Colabore</p>
          </button>
        </Link>
      </div>
    </header>
  );
}
