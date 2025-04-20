import Image from "next/image";

export interface BackDropProps {
  imgSrc: string;
  width: number;
  height: number;
  imgAlt: string;
}

export function BackDrop({ imgSrc, width, height, imgAlt }: BackDropProps) {
  return (
    <div className="absolute top-0 w-auto max-w-none lg:max-w-screen min-h-screen lg:w-screen max-h-full -z-10 bg-gradient-to-r from-zinc-900/84 to-zinc-900/84 opacity-25 overflow-hidden">
      <Image
        src={imgSrc}
        width={width}
        height={height}
        alt={imgAlt}
        className="max-w-none"
        loading="lazy"
      />
    </div>
  );
}
