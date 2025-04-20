export function getSkeletonCount(width: number, count: number) {
  if (width >= 1024) {
    return count;
  } else if (width >= 561) {
    return count - 2;
  }
  return 2;
}

export function getSkeletonHeight(
  width: number,
  height: number,
  currentCount: number
) {
  if (width >= 1280) {
    return height;
  } else {
    return (width / currentCount) * 1.32;
  }
}
