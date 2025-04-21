import { ShowType } from "@/types/show-types";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

export interface FavoriteProps {
  id: number;
  title: string;
  date: string;
  image: string;
  rating: number;
  type: ShowType;
  onRemoveFavorite: (id: number) => void;
}

export function Favorite({
  date,
  id,
  image,
  rating,
  title,
  type,
  onRemoveFavorite,
}: FavoriteProps) {
  const handleRemoveFavoriteClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      event.stopPropagation();
      onRemoveFavorite(id);
    },
    [id, onRemoveFavorite]
  );

  return (
    <Link
      href={`/details/${type}/${id}`}
      className="flex flex-col items-center justify-center gap-2 relative p-1.5"
    >
      <Image src={image} width={300} height={443} alt={`Poster de ${title}`} />
      <h3 className="text-base md:text-xl font-semibold text-center">
        {title}
      </h3>
      <span className="text-center text-sm">{date}</span>
      <span className="text-xs">Nota {rating} de 10</span>
      <button
        className="bg-zinc-500 text-white px-4 py-2 mt-4 rounded cursor-pointer"
        onClick={handleRemoveFavoriteClick}
      >
        Remover dos favoritos
      </button>
    </Link>
  );
}
