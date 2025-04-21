"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import { BackDrop } from "@/components/BackDrop";
import { Cast } from "@/components/Cast";
import useDetails from "@/hooks/useDetails";
import { ShowType } from "@/types/show-types";
import { Error } from "@/icons/Error";
import Link from "next/link";
import { Loading } from "@/icons/Loading";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { favoriteShows } from "@/constants/local-storage-key";
import { useCallback } from "react";

export default function DetailModule() {
  const { type, id } = useParams<{ id: string; type: ShowType }>();
  const { data, loading, error } = useDetails(type, id);
  const { addValue, valueExists } = useLocalStorage({ key: favoriteShows });

  const handleFavoriteClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      event.stopPropagation();

      addValue({
        date: data!.date,
        id: data!.id,
        image: data!.image,
        title: data!.title,
        rating: data!.rating,
        type: type,
      });
    },
    [addValue, data, type]
  );

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 w-full p-12">
        <span className="text-2xl text-center font-semibold text-gray-500">
          Tivemos um erro ao carregar os detalhes.
        </span>
        <span className="font-semibold text-gray-500">
          Tente novamente mais tarde.
        </span>
        <Error />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-start gap-2 w-full p-12 min-h-screen mt-24">
        <span className="text-zinc-600 text-center">
          Estamos carregando as informacoes para voce!
        </span>
        <Loading />
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center md:flex-row md:items-start lg:items-center justify-center gap-2 w-full max-w-full md:pt-14 lg:p-11 min-h-screen">
      <BackDrop
        imgSrc={data?.backdrop_path || ""}
        width={1920}
        height={1080}
        imgAlt={`Poster de ${data?.title}`}
      />
      <h1 className="text-4xl font-bold text-center block md:hidden my-3">
        {data?.title}
      </h1>
      <div className="rounded-lg overflow-hidden flex-[0_0_auto] max-w-80 lg:max-w-full">
        <Image
          src={data?.image || ""}
          width={500}
          height={750}
          alt={`Poster de ${data?.title}`}
          priority
          loading="eager"
          blurDataURL="/images/loading.jpeg"
          placeholder="blur"
          className="w-full h-auto rounded-lg object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-3 max-w-full">
        <h1 className="text-4xl font-bold text-center hidden md:block">
          {data?.title}
        </h1>

        <span className="text-sm">{data?.date}</span>
        <span className="text-sm font-semibold">Nota {data?.rating} de 10</span>

        <span className="text-sm font-semibold flex flex-wrap gap-2 items-center justify-center lg:max-w-1/2">
          {data?.genres.map((genre) => (
            <span
              key={genre}
              className="bg-red-700 text-white px-2 py-1 rounded-full mr-2"
            >
              {genre}
            </span>
          ))}
        </span>

        <p className="text-base mt-2 mb-8 text-center">{data?.overview}</p>
        {data?.cast && data.cast.length > 0 && <Cast cast={data?.cast} />}
        {data?.homepage && (
          <Link
            href={data?.homepage || ""}
            target="_blank"
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded font-semibold"
          >
            Acessar pagina oficial
          </Link>
        )}

        {!valueExists(data!.id) && (
          <button
            onClick={handleFavoriteClick}
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded font-semibold cursor-pointer"
          >
            Marcar como Favorito
          </button>
        )}
      </div>
    </div>
  );
}
