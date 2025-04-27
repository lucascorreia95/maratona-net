import Image from "next/image";
import { BackDrop } from "@/components/BackDrop";
import { Cast } from "@/components/Cast";
import { ShowType } from "@/types/show-types";
import { Error } from "@/icons/Error";
import Link from "next/link";
import { NormalizedDetailsResponse } from "@/types/normalized-details";
import { FavoriteButton } from "@/components/FavoriteButton";

export interface DetailModuleProps {
  initialData: NormalizedDetailsResponse | null;
  error: boolean;
  type: ShowType;
}

export default function DetailModule({
  initialData,
  error,
  type,
}: DetailModuleProps) {
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

  return (
    <div className="relative flex flex-col items-center md:flex-row md:items-start lg:items-center justify-center gap-2 w-full max-w-full md:pt-14 lg:p-11 min-h-screen">
      <BackDrop
        imgSrc={initialData?.backdrop_path || ""}
        width={1920}
        height={1080}
        imgAlt={`Poster de ${initialData?.title}`}
      />
      <h1 className="text-4xl font-bold text-center block md:hidden my-3">
        {initialData?.title}
      </h1>
      <div className="rounded-lg overflow-hidden flex-[0_0_auto] max-w-80 lg:max-w-full">
        <Image
          src={initialData?.image || ""}
          width={500}
          height={750}
          alt={`Poster de ${initialData?.title}`}
          priority
          loading="eager"
          blurDataURL="/images/loading.jpeg"
          placeholder="blur"
          className="w-full h-auto rounded-lg object-cover object-center"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 p-3 max-w-full">
        <h2 className="text-4xl font-bold text-center hidden md:block">
          {initialData?.title}
        </h2>

        <span className="text-sm">{initialData?.date}</span>
        <span className="text-sm font-semibold">
          Nota {initialData?.rating} de 10
        </span>

        <span className="text-sm font-semibold flex flex-wrap gap-2 items-center justify-center lg:max-w-1/2">
          {initialData?.genres.map((genre) => (
            <span
              key={genre}
              className="bg-red-700 text-white px-2 py-1 rounded-full mr-2"
            >
              {genre}
            </span>
          ))}
        </span>

        <p className="text-base mt-2 mb-8 text-center">
          {initialData?.overview}
        </p>
        {initialData?.cast && initialData.cast.length > 0 && (
          <Cast cast={initialData?.cast} />
        )}
        {initialData?.homepage && (
          <Link
            href={initialData?.homepage || ""}
            target="_blank"
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded font-semibold"
          >
            Acessar pagina oficial
          </Link>
        )}

        <FavoriteButton data={{ ...initialData!, type: type! }} />
      </div>
    </div>
  );
}
