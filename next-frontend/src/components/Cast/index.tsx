"use client";
import { Carousel } from "../Carousel";
import { Settings } from "react-slick";
import { CastItem } from "./CastItem";

export interface CastProps {
  cast: { id: number; name: string; image: string }[] | undefined;
}

export function Cast({ cast }: CastProps) {
  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full md:max-w-[380] lg:max-w-[500]">
      <h3 className="text-xl font-semibold mb-4">Elenco</h3>
      <Carousel settings={settings}>
        {cast &&
          cast.map((item) => (
            <CastItem
              key={item.id}
              name={item.name}
              imageUrl={`https://image.tmdb.org/t/p/w500${item.image}`}
              imageAlt={item.name}
            />
          ))}
      </Carousel>
    </div>
  );
}
