import Image from "next/image";

export interface CastItemProps {
  name: string;
  imageUrl: string;
  imageAlt: string;
}

export function CastItem({ imageAlt, imageUrl, name }: CastItemProps) {
  return (
    <div className="flex flex-col items-center justify-start gap-4">
      <Image
        src={imageUrl}
        width={150}
        height={225}
        alt={imageAlt}
        className="overflow-hidden rounded-4xl"
      />
      <h4 className="text-sm font-semibold text-center">{name}</h4>
    </div>
  );
}
