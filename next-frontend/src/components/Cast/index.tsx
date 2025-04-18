import { Carousel } from "../Carousel";
import { Settings } from "react-slick";
import { CastItem } from "./CastItem";

export function Cast() {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-[510] w-max-full">
      <h3 className="text-xl font-semibold mb-4">Elenco</h3>
      <Carousel settings={settings}>
        <CastItem
          imageAlt="Nome do ator/atriz"
          name="Nome do ator"
          imageUrl="https://image.tmdb.org/t/p/w200/7NLY1jNwtZX1yVzwVoBeAhaBE8i.jpg"
        />
        <CastItem
          imageAlt="Nome do ator/atriz"
          name="Nome do ator"
          imageUrl="https://image.tmdb.org/t/p/w200/7NLY1jNwtZX1yVzwVoBeAhaBE8i.jpg"
        />
        <CastItem
          imageAlt="Nome do ator/atriz"
          name="Nome do ator"
          imageUrl="https://image.tmdb.org/t/p/w200/7NLY1jNwtZX1yVzwVoBeAhaBE8i.jpg"
        />
        <CastItem
          imageAlt="Nome do ator/atriz"
          name="Nome do ator"
          imageUrl="https://image.tmdb.org/t/p/w200/7NLY1jNwtZX1yVzwVoBeAhaBE8i.jpg"
        />
      </Carousel>
    </div>
  );
}
