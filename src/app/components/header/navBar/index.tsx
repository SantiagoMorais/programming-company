import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navBarRoutes } from "@/utils/routes";
import { Menu } from "lucide-react";

export const NavBar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle className="text-start text-2xl">Navegação</SheetTitle>
        <Separator />
        <ul className="space-y-8 pt-8">
          {navBarRoutes.map((route) => (
            <li key={route.title}>
              <SheetClose>
                <a href={route.path} className="text-xl">
                  {route.title}
                </a>
              </SheetClose>
            </li>
          ))}
        </ul>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);
