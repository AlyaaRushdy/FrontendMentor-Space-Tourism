import { Link, NavLink } from "react-router-dom";
import NavSheet from "./NavSheet";
import logo from "/src/assets/logo.svg";

const navItems = [
  { text: "Home", path: "/" },
  { text: "Destination", path: "/destination" },
  { text: "Crew", path: "/crew" },
  { text: "Technology", path: "/technology" },
];

function Navbar() {
  return (
    <>
      <nav className="flex flex-row items-center justify-between self-start px-6 py-6 md:pl-10 md:pr-0 md:pt-0 lg:pl-14 lg:pt-6">
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <div className="z-[1] hidden h-px flex-grow translate-x-12 bg-white bg-opacity-25 lg:block"></div>
        <ul className="hidden flex-row bg-white bg-opacity-[4%] px-12 py-10 backdrop-blur-md md:flex md:gap-[34px] lg:gap-16 lg:px-32">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="font-barlow_condensed text-[14px] uppercase tracking-[2.7px] text-foreground decoration-[3px] underline-offset-[44px] hover:underline hover:decoration-white/50 has-[.active]:underline has-[.active]:decoration-white"
            >
              <NavLink to={item.path}>
                <span className="hidden font-bold lg:inline">0{i}</span>{" "}
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavSheet navItems={navItems} />
      </nav>
    </>
  );
}

export default Navbar;
