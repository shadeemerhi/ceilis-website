import Link from "next/link";

interface INavLinkProps {
  text: string;
  href: string;
}

const NavLink = ({ text, href }: INavLinkProps) => {
  return (
    <Link
      href={href}
      className="tracking-widest hover:text-zinc-300 text-white"
    >
      {text}
    </Link>
  );
};

export default NavLink;
