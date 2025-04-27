"use client";
import { MediaItem } from "@/components/MediaItem";
import { favoriteShows } from "@/constants/local-storage-key";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { Error } from "@/icons/Error";
import { MediaTypes } from "@/types/media-types";
import { NormalizedSearchResponse } from "@/types/normalized-search";
import { useCallback } from "react";

export interface SearchModuleProps {
  initialData: NormalizedSearchResponse | null;
  error: boolean;
}

export function SearchModule({ initialData, error }: SearchModuleProps) {
  const { addValue, removeValue, valueExists } = useLocalStorage({
    key: favoriteShows,
  });

  const handleCtaClick = useCallback(
    (item: MediaTypes) => {
      if (valueExists(item.id)) {
        removeValue(item.id);
      } else {
        addValue(item);
      }
    },
    [addValue, removeValue, valueExists]
  );

  if (error) {
    return (
      <div className="flex-1 flex flex-col items-center py-6 gap-4">
        <h2 className="text-center text-zinc-600">
          Houve um erro ao fazer sua busca =(
        </h2>
        <Error />
      </div>
    );
  }

  if (!initialData || initialData.results.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center py-6 gap-4">
        <h2 className="text-center text-zinc-600">
          Não encontramos nenhum item na sua busca =(
        </h2>
        <Error />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-4 py-4">
      <h4 className="font-semibold text-2xl my-3">
        Aqui está o resultado da sua busca:
      </h4>
      <div className="flex-1 max-w-full w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {initialData.results.map((item) => (
          <div key={item.id}>
            <MediaItem
              date={item.date}
              id={item.id}
              image={item.image}
              rating={item.rating}
              title={item.title}
              type={item.type}
              ctaText={
                valueExists(item.id)
                  ? "Remover dos favoritos"
                  : "Adicionar aos favoritos"
              }
              ctaBgColor={valueExists(item.id) ? "bg-zinc-500" : "bg-red-500"}
              onCtaClick={() => handleCtaClick(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
