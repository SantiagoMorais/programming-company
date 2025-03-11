import { Button } from "@/components/ui/button";

export const VisitWebsiteComponent = ({
  projectUrl,
}: {
  projectUrl: string;
}) => (
  <div className="group absolute top-0 left-0 z-10 flex h-full w-full cursor-pointer items-center justify-center opacity-0 duration-300 group-hover:opacity-100 group-hover:backdrop-blur-xs">
    <Button
      asChild
      variant="outline"
      className="hover:border-secondary hover:text-secondary border-2 border-transparent duration-300 hover:opacity-80"
    >
      <a href={projectUrl} target="_blank" className="text-xl font-normal">
        Visitar Site
      </a>
    </Button>
  </div>
);
