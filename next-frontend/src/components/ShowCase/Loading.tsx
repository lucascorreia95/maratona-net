import {
  getSkeletonCount,
  getSkeletonHeight,
} from "@/helpers/getSkeletonProps";
import { useEffect, useMemo, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function Loading({
  count = 5,
  height = 400,
}: {
  count?: number;
  height?: number;
}) {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  const currentCount = useMemo(() => {
    if (windowWidth !== null) {
      return getSkeletonCount(windowWidth, count);
    }
    return 1;
  }, [windowWidth, count]);

  const skeletonHight = useMemo(() => {
    if (windowWidth !== null) {
      return getSkeletonHeight(windowWidth, height, currentCount);
    }
    return height;
  }, [currentCount, height, windowWidth]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton
        customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
        containerClassName="flex-1 flex flex-row gap-2 w-full"
        count={currentCount}
        height={skeletonHight || height}
      />
      <Skeleton
        customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
        containerClassName="flex-1 flex flex-row gap-2 w-full"
        count={currentCount}
        height={12}
      />
      <Skeleton
        customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
        containerClassName="flex-1 flex flex-row gap-2 w-full"
        count={currentCount}
        height={12}
      />
      <Skeleton
        customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
        containerClassName="flex-1 flex flex-row gap-2 w-full"
        count={currentCount}
        height={6}
      />
    </SkeletonTheme>
  );
}
