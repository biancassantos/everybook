import { ReactElement } from "react";
import { NavLink } from "react-router";

type NavbarLinkProps = {
  text: string,
  url: string,
  icon: ReactElement
}

function NavbarLink({ text, url, icon }: NavbarLinkProps) {
  return (
    <li>
      <NavLink 
      to={url}
      className="flex items-center gap-3 py-1 px-4 border border-primary rounded-full text-primary [.active]:text-latte [.active]:bg-primary font-semibold hover:not-[.active]:border-secondary hover:not-[.active]:text-primarydark duration-300"
      >
        {icon} {text}
      </NavLink>
    </li>
  )
}

export default NavbarLink;