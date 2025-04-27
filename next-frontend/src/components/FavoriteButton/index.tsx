"use client";
import { favoriteShows } from "@/constants/local-storage-key";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { MediaTypes } from "@/types/media-types";
import { useCallback, useEffect, useState } from "react";

export function FavoriteButton({ data }: { data: MediaTypes }) {
  const [isMounted, setIsMounted] = useState(false);
  const { addValue, valueExists } = useLocalStorage({ key: favoriteShows });

  const handleFavoriteClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      event.stopPropagation();

      addValue({ ...data });
    },
    [addValue, data]
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {!valueExists(data.id) && (
        <button
          onClick={handleFavoriteClick}
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded font-semibold cursor-pointer"
        >
          Marcar como Favorito
        </button>
      )}
    </>
  );
}
