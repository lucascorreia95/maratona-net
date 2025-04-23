"use client";
import { MediaItem } from "@/components/MediaItem";
import { favoriteShows } from "@/constants/local-storage-key";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Loading } from "@/icons/Loading";
import Link from "next/link";
import { useCallback } from "react";

export function FavoritesModule() {
  const { valuesList, isLoading, removeValue } = useLocalStorage({
    key: favoriteShows,
  });

  const handleRemoveFavoriteClick = useCallback(
    (id: number) => {
      removeValue(id);
    },
    [removeValue]
  );

  if (isLoading) {
    return (
      <div className="flex-1 flex flex-col items-center py-6">
        <h2>Carregando seus items favoritos ...</h2>
        <Loading />
      </div>
    );
  }

  if (!valuesList || valuesList.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center py-6 gap-10">
        <h2 className="text-center text-zinc-600">
          Não encontramos nenhum item favorito =(
        </h2>
        <Link
          href="/"
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded font-semibold text-center max-w-64"
        >
          Volte para a Homepage e encontre algo que goste!
        </Link>
      </div>
    );
  }

  return (
    <div className="flex-1 max-w-full w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {valuesList.map((item) => (
        <div key={item.id}>
          <MediaItem
            date={item.date}
            id={item.id}
            image={item.image}
            rating={item.rating}
            title={item.title}
            type={item.type}
            ctaText="Remover dos Favoritos"
            onCtaClick={handleRemoveFavoriteClick}
          />
        </div>
      ))}
    </div>
  );
}
