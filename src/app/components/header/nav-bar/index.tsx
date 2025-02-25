import { RoutesList } from "./routes-list";
import { SheetNavBar } from "./sheet-nav-bar";

export const NavBar = () => (
  <nav className="flex items-center justify-between">
    <SheetNavBar />
    <div className="">logo</div>
    <RoutesList insideASheet={false} className="hidden md:flex" />
  </nav>
);
