import { MoviesModule } from "@/modules/Movies";
import { TvSeriesModule } from "@/modules/TvSeries";

export default function HomePage() {
  return (
    <div className="max-w-full w-full flex flex-col justify-center gap-14 mt-12">
      <MoviesModule />
      <TvSeriesModule />
    </div>
  );
}
