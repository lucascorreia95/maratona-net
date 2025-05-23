import React, { useCallback } from "react";
import { Heart } from "@/icons/Heart";
import Image from "next/image";
import Link from "next/link";
import { ShowType } from "@/types/show-types";

export interface ShowCaseItemProps {
  id: number;
  title: string;
  date: string;
  image: string;
  rating: number;
  type: ShowType;
  onFavoriteClick: () => void;
  isFavorite: boolean;
}

export function ShowCaseItem({
  date,
  id,
  image,
  rating,
  title,
  type,
  onFavoriteClick,
  isFavorite,
}: ShowCaseItemProps) {
  const [clientXonMouseDown, setClientXonMouseDown] = React.useState<
    number | null
  >(null);
  const [clientYonMouseDown, setClientYonMouseDown] = React.useState<
    number | null
  >(null);

  const handleOnMouseDown = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      setClientXonMouseDown(event.clientX);
      setClientYonMouseDown(event.clientY);

      event.preventDefault();
    },
    []
  );

  const handleItemClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.stopPropagation();

      if (
        clientXonMouseDown !== event.clientX ||
        clientYonMouseDown !== event.clientY
      ) {
        event.preventDefault();
      }
    },
    [clientXonMouseDown, clientYonMouseDown]
  );

  const handleFavoriteClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      event.preventDefault();

      if (onFavoriteClick) {
        onFavoriteClick();
      }
    },
    [onFavoriteClick]
  );

  return (
    <Link
      href={`/details/${type}/${id}`}
      onClick={handleItemClick}
      onMouseDown={handleOnMouseDown}
      className="flex flex-col items-center justify-center gap-2 relative p-1.5"
    >
      <Image src={image} width={300} height={443} alt={`Poster de ${title}`} />
      <h3 className="text-base md:text-xl font-semibold text-center">
        {title}
      </h3>
      <span className="text-center text-sm">{date}</span>
      <button
        onClick={handleFavoriteClick}
        className="absolute top-4 right-3 cursor-pointer z-10"
      >
        <Heart color={!isFavorite ? "transparent" : ""} />
      </button>
      <span className="text-xs">Nota {rating} de 10</span>
    </Link>
  );
}
