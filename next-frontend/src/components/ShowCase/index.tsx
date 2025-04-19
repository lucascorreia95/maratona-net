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
    dots: true,
    infinite: true,
    autoplay: true,
    autoPlaySpeed: 5000,
    speed: 500,
    slidesToShow: 5,
  };

  return (
    <div className="w-full max-w-full">
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
