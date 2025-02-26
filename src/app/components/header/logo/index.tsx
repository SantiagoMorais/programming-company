import Image from "next/image";

import logo from "@/assets/logo.png";

export const Logo = () => (
  <section className="flex items-center gap-2 select-none">
    <div className="relative size-10">
      <Image src={logo} fill alt="logo" className="object-contain" />
    </div>
    <h1 className="text-3xl font-extrabold">Logo</h1>
  </section>
);
