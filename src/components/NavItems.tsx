"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathName = usePathname();

  return (
    <ul className="md:flex justify-end items-center gap-4 hidden">
        {links.map(({label,href}) => (
        <Link className={`${pathName === href ? "text-primary":"text-black"} hover:text-primary transition-colors ease-in-out duration-300`} key={href} href={href}>{label}</Link>
        ))}
    </ul>
  );
};

const links = [ { label: "SOBRE MÍ", href: "/about", }, { label: "CURRÍCULUM", href: "/curriculum", }, { label: "PROYECTOS", href: "/proyectos", }, { label: "CONTACTO", href: "/contacto", }, ];