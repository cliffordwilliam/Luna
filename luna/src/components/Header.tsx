"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type LinkType = { name: string; href: string };

const Header = ({ links }: { links: LinkType[] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-2xl">
      <nav className="container mx-auto p-4 flex gap-4 items-center">
        <Link href={"/"}>
          <Image src="/next.svg" width={100} height={100} alt="Logo" />
        </Link>
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col gap-4 absolute top-0 left-0 p-4 bg-white w-full h-dvh sm:flex-row sm:static sm:p-0 sm:h-auto sm:w-auto sm:flex`}
        >
          <li className="flex justify-between sm:hidden">
            <Image src="/next.svg" width={100} height={100} alt="Logo" />
            <button onClick={toggleMenu}>
              <Image src="/x.svg" width={40} height={40} alt="Logo" />
            </button>
          </li>
          {links.map((link) => (
            <li key={link.name}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <button className="sm:hidden ml-auto" onClick={toggleMenu}>
          <Image
            className="sm:hidden"
            src="/b.svg"
            width={40}
            height={40}
            alt="Logo"
          />
        </button>
      </nav>
    </header>
  );
};

export default Header;
