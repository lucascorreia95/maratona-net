import { ShowCaseItem } from "./ShowCaseItem";
import { Carousel } from "../Carousel";
import { ShowType } from "@/types/show-types";
import { NormalizedDiscoverResult } from "@/types/normalized-discover";

export interface ShowCaseProps {
  list: NormalizedDiscoverResult[];
  type: ShowType;
}

export function ShowCase({ list, type }: ShowCaseProps) {
  const settings = {
    infinite: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    speed: 500,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
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
    <div className="w-full max-w-full p-4">
      <Carousel settings={settings}>
        {list.map((item) => (
          <div key={item.id}>
            <ShowCaseItem
              date={item.date}
              id={item.id}
              image={item.image}
              rating={item.rating}
              title={item.title}
              key={item.id}
              type={type}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export { Loading } from "./Loading";
