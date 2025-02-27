import Image from "next/image";
import { tv } from "tailwind-variants";

import { Skeleton } from "@/components/ui/skeleton";
import { IUploadedSkeletonContentProps } from "@/core/interfaces/uploaded-skeleton-content-props";

// This constant ensure the components will always have the same size and position
const sizes = tv({
  variants: {
    avatarContainer: {
      primary:
        "size-12 min-h-12 min-w-12 sm:size-16 sm:min-h-16 sm:min-w-16 rounded-full",
    },
    contentContainer: {
      primary:
        "flex w-full flex-col items-center gap-2 sm:w-fit sm:items-start sm:gap-3",
    },
    nameContainer: { primary: "h-6 w-full sm:w-60 md:w-80" },
    positionContainer: { primary: "h-6 max-w-4/5 w-4/5 sm:w-50 md:w-60" },
  },
});

export const LoadingSkeletonContent = () => (
  <div className="flex w-full flex-col items-center gap-4 sm:w-fit sm:flex-row">
    <Skeleton
      className={sizes({
        avatarContainer: "primary",
        className: "bg-muted-foreground",
      })}
    />
    <div
      className={sizes({
        contentContainer: "primary",
      })}
    >
      <Skeleton
        className={sizes({
          nameContainer: "primary",
          className: "bg-muted-foreground",
        })}
      />
      <Skeleton
        className={sizes({
          positionContainer: "primary",
          className: "bg-muted-foreground",
        })}
      />
    </div>
  </div>
);

export const UploadedSkeletonContent = ({
  photo,
  name,
  position,
}: IUploadedSkeletonContentProps) => (
  <div className="flex w-full flex-col items-center gap-4 sm:w-fit sm:flex-row">
    <div
      className={sizes({
        avatarContainer: "primary",
        className: "shadow-secondary border-primary relative border-2",
      })}
    >
      <Image src={photo} alt="foto de perfil" fill className="rounded-full" />
    </div>
    <div
      className={sizes({
        contentContainer: "primary",
      })}
    >
      <div
        className={sizes({
          nameContainer: "primary",
          className:
            "bg-muted-foreground/30 flex items-center justify-center rounded-md sm:justify-start",
        })}
      >
        <p className="truncate px-2 text-center text-sm font-semibold text-ellipsis sm:text-start sm:text-base">
          {name}
        </p>
      </div>
      <div
        className={sizes({
          positionContainer: "primary",
          className:
            "bg-background/50 flex items-center justify-center overflow-hidden rounded-md sm:justify-start",
        })}
      >
        <p className="text-muted-foreground truncate px-2 text-center text-sm text-ellipsis sm:text-start sm:text-base">
          {position}
        </p>
      </div>
    </div>
  </div>
);
