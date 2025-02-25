import logo from "@/assets/logo.png";
import Image from "next/image";

export const Logo = () => (
  <section className="flex select-none items-center gap-2">
    <div className="relative size-10">
      <Image src={logo} fill alt="logo" className="object-contain" />
    </div>
    <h1 className="text-3xl font-extrabold">Logo</h1>
  </section>
);
