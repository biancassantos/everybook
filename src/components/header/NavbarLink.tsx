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
      className="group flex items-center gap-3 h-[40px] not-[.active]:w-[40px] py-1 px-3 border border-primary rounded-full text-sm text-primary [.active]:text-latte [.active]:bg-primary font-semibold hover:not-[.active]:border-transparent hover:not-[.active]:text-primarydark duration-300 xs:h-[35px] xs:not-[.active]:w-auto xs:text-base xs:px-4"
      >
        {icon}
        <span className="group-[.active]:inline hidden md:inline">
          {text}
        </span>
      </NavLink>
    </li>
  )
}

export default NavbarLink;