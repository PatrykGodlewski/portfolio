import { LOCALES } from "@/lib/constants";
import { Search } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "../ui/logo";
import MenuPopover from "../ui/menu-popover";
import LanguageSwitch from "./language-switch";
import ThemeSwitch from "./theme-switch";

interface Props {
  locale: LOCALES;
}

function Navbar({ locale }: Props) {
  return (
    <nav className="flex z-50 fixed items-center p-8 justify-between w-full top-0 h-[var(--navbar-height)]">
      <MenuPopover />
      <Logo />
      <div className="flex gap-4 items-center">
        <LanguageSwitch currentLocale={locale} />
        <ThemeSwitch />
        <Button variant={"ghost"}>
          <Search />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
