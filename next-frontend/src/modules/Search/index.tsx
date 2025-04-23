"use client";
import { MediaItem } from "@/components/MediaItem";
import { favoriteShows } from "@/constants/local-storage-key";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import useSearch from "@/hooks/useSearch";
import { Error } from "@/icons/Error";
import { Loading } from "@/icons/Loading";
import { MediaTypes } from "@/types/media-types";
import { useCallback } from "react";

export interface SearchModuleProps {
  query: string | undefined;
}

export function SearchModule({ query }: SearchModuleProps) {
  const { data, loading, error } = useSearch(query);
  const { addValue } = useLocalStorage({ key: favoriteShows });

  const handleCtaClick = useCallback(
    (item: MediaTypes) => {
      addValue(item);
    },
    [addValue]
  );

  if (loading) {
    return (
      <div className="flex-1 flex flex-col items-center py-6 mt-11">
        <span className="text-zinc-500">Buscando, aguarde um momento ...</span>
        <Loading />
      </div>
    );
  }

  if (!data || data.results.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center py-6 gap-4">
        <h2 className="text-center text-zinc-600">
          Não encontramos nenhum item na sua busca =(
        </h2>
        <Error />
      </div>
    );
  }

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

  return (
    <div className="flex flex-1 flex-col gap-4 py-4">
      <h4 className="font-semibold text-2xl my-3">
        Aqui está o resultado da sua busca:
      </h4>
      <div className="flex-1 max-w-full w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {data.results.map((item) => (
          <div key={item.id}>
            <MediaItem
              date={item.date}
              id={item.id}
              image={item.image}
              rating={item.rating}
              title={item.title}
              type={item.type}
              ctaText="Adicionar aos favoritos"
              ctaBgColor="bg-red-500"
              onCtaClick={() => handleCtaClick(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
