import Image from "next/image";

import cellphoneImage from "@/assets/responsive-design-image.png";

export const ChildrenContent = () => (
  <div className="group relative flex w-full justify-center">
    <div className="to-muted absolute -bottom-2.5 z-10 h-1/2 w-full bg-linear-to-b from-transparent" />
    <div className="ring-ring relative h-dvw max-h-150 w-full max-w-80 overflow-hidden rounded-xl ring-8 md:h-100 md:max-w-64">
      <Image
        src={cellphoneImage}
        fill
        alt="design responsivo"
        className="object-cover object-top duration-1000 group-hover:object-bottom"
      />
    </div>
  </div>
);
