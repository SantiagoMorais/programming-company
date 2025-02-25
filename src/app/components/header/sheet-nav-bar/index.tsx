import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { RoutesList } from "../routes-list";

export const SheetNavBar = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" className="md:hidden md:bg-black">
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent
      side="left"
      className="[&>button]:right-8 [&>button]:top-8 [&>button]:scale-150"
    >
      <SheetHeader className="relative">
        <SheetTitle className="text-start text-2xl">Navegação</SheetTitle>
        <Separator />
        <RoutesList insideASheet />
      </SheetHeader>
    </SheetContent>
  </Sheet>
);
