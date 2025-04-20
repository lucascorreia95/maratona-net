import { CartoonModule } from "@/modules/Cartoon";
import { MoviesModule } from "@/modules/Movies";
import { TvSeriesModule } from "@/modules/TvSeries";

export default function HomePage() {
  return (
    <div className="max-w-full w-full flex flex-col justify-center gap-14 mt-4 md:mt-12">
      <MoviesModule />
      <TvSeriesModule />
      <CartoonModule />
    </div>
  );
}
