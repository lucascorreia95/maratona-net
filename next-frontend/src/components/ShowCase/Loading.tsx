import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export function Loading({
  count = 5,
  height = 400,
}: {
  count?: number;
  height?: number;
}) {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Skeleton
        customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
        containerClassName="flex-1 flex flex-row gap-2 w-full"
        count={count}
        height={height}
      />
      <Skeleton
        customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
        containerClassName="flex-1 flex flex-row gap-2 w-full"
        count={count}
        height={12}
      />
      <Skeleton
        customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
        containerClassName="flex-1 flex flex-row gap-2 w-full"
        count={count}
        height={12}
      />
      <Skeleton
        customHighlightBackground="linear-gradient(90deg, var(--base-color) 40%, var(--highlight-color) 50%, var(--base-color) 60%)"
        containerClassName="flex-1 flex flex-row gap-2 w-full"
        count={count}
        height={6}
      />
    </SkeletonTheme>
  );
}
