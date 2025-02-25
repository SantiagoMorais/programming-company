import { Logo } from "./logo";
import { RoutesList } from "./routes-list";
import { SheetNavBar } from "./sheet-nav-bar";
import { ToggleThemeButton } from "./toggle-theme-button";

export const Header = () => (
  <header className="flex w-full max-w-(--breakpoint-2xl) items-center justify-between p-4">
    <SheetNavBar />
    <Logo />
    <RoutesList insideASheet={false} className="hidden md:flex" />
    <ToggleThemeButton />
  </header>
);
