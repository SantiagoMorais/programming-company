import { aboutUsData } from "@/utils/about-us-data";

export const AboutUsCards = () => (
  <div className="space-y-4">
    <h3 className="w-fit text-center text-3xl font-semibold md:text-start md:text-4xl">
      O que nos torna diferentes?
    </h3>
    <ul className="flex flex-wrap justify-center gap-4">
      {aboutUsData.map(({ content, title }) => (
        <li
          key={title}
          className="text-primary flex min-w-full flex-1 flex-col gap-2 rounded-lg border p-5 select-none md:min-w-60"
        >
          <strong className="text-foreground">{title}</strong>{" "}
          <p className="text-muted-foreground md:max-w-80">{content}</p>
        </li>
      ))}
    </ul>
  </div>
);
