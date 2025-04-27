import dynamic from "next/dynamic";

const DynamicMoviesModule = dynamic(() => import("@/modules/Movies"), {
  loading: () => <p>Carregando...</p>,
});

const DynamicTvSeriesModule = dynamic(() => import("@/modules/TvSeries"), {
  loading: () => <p>Carregando...</p>,
});

const DynamicCartoonModule = dynamic(() => import("@/modules/Cartoon"), {
  loading: () => <p>Carregando...</p>,
});

export default function HomePage() {
  return (
    <div className="max-w-full w-full flex flex-col justify-center gap-14 mt-4 md:mt-12">
      <DynamicMoviesModule />
      <DynamicTvSeriesModule />
      <DynamicCartoonModule />
    </div>
  );
}
