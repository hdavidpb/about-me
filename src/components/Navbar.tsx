import Link from 'next/link';
import { NavItems } from './NavItems';
import { ItemSquare } from './ItemSquare';

interface Props{
  name:string,
  profetion:string
}

export const Navbar = ({name,profetion}:Props) => {


  return (
    <nav className="w-full h-auto md:h-[100px] border flex justify-between items-center md:px-8 px-2 py-3 md:py-0">
      <Link href="/about" className="flex-1 flex justify-start items-start md:items-center flex-col md:flex-row">
        <ItemSquare label={name} marginRight='mr-8'/>
        <span className="-tracking-tight text-sm uppercase">/{profetion}</span>
      </Link>
      <NavItems/>
    </nav>
  );
}

