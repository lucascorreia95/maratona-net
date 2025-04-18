import Image from "next/image";

export interface BackDropProps {
  imgSrc: string;
  width: number;
  height: number;
  imgAlt: string;
}

export function BackDrop({ imgSrc, width, height, imgAlt }: BackDropProps) {
  return (
    <div className="absolute top-0 w-screen max-h-full -z-10 bg-gradient-to-r from-zinc-900/84 to-zinc-900/84 opacity-25 max-w-screen overflow-hidden">
      <Image src={imgSrc} width={width} height={height} alt={imgAlt} />
    </div>
  );
}
