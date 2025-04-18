import { ShowCaseItem, ShowCaseItemProps } from "./ShowCaseItem";
import { Carousel } from "../Carousel";

export interface ShowCaseProps {
  list: ShowCaseItemProps[];
}

export function ShowCase({ list }: ShowCaseProps) {
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
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export { Loading } from "./Loading";
