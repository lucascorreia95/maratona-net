import { Heart } from "@/icons/Heart";
import { FavoritesModule } from "@/modules/Favorites";

export default function FavoritesPage() {
  return (
    <div className="flex-1 max-w-full w-full flex flex-col mt-7 gap-6">
      <h1 className="flex flex-row justify-center items-center gap-2">
        <span className="text-3xl font-semibold">Meus Favoritos!</span>{" "}
        <Heart />
      </h1>
      <FavoritesModule />
    </div>
  );
}
