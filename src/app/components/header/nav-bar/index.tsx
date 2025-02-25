import Image from "next/image";
import { RoutesList } from "./routes-list";
import { SheetNavBar } from "./sheet-nav-bar";
import { ToggleThemeButton } from "./toggle-theme-button";
import logo from "@/assets/logo.png";

export const NavBar = () => (
  <nav className="flex items-center justify-between">
    <SheetNavBar />
    <div className="flex select-none items-center gap-2">
      <div className="relative size-10">
        <Image src={logo} fill alt="logo" className="object-contain" />
      </div>
      <h1 className="text-3xl font-extrabold">Logo</h1>
    </div>
    <RoutesList insideASheet={false} className="hidden md:flex" />
    <ToggleThemeButton />
  </nav>
);
