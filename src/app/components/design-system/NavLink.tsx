import Link, { LinkProps } from "next/link";

interface INavLinkProps extends LinkProps {
  text: string;
  href: string;
}

const NavLink = ({ text, href, ...rest }: INavLinkProps) => {
  return (
    <Link
      {...rest}
      href={href}
      className="tracking-widest hover:text-zinc-300 text-white"
    >
      {text}
    </Link>
  );
};

export default NavLink;
