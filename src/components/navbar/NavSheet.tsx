import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavSheet({
  navItems,
}: {
  navItems: { path: string; text: string }[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetHeader className="hidden">
        <SheetTitle>
          <p className="sr-only">Navigation Menu</p>
        </SheetTitle>
      </SheetHeader>
      <SheetTrigger className="inline-block md:hidden">
        <img src="/src/assets/images/shared/icon-hamburger.svg" alt="menu" />
      </SheetTrigger>
      <SheetContent className="border-l-0 bg-white bg-opacity-5 pr-0 shadow-none backdrop-blur-xl">
        <ul className="flex flex-col gap-8 pt-[7.5rem]">
          {navItems.map((item, i) => (
            <li
              key={i}
              className="font-barlow_condensed text-[16px] uppercase tracking-[2.7px] text-foreground hover:border-r-[3px] hover:border-r-white/50 has-[.active]:border-r-[3px] has-[.active]:border-r-white"
            >
              <NavLink
                to={item.path}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                <span className="pr-1 font-bold">0{i}</span> {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}

export default NavSheet;
