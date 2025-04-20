import Slider, { Settings } from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const defaultSettings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  lazyLoad: "ondemand",
};

export function Carousel({
  settings,
  children,
}: {
  settings: Settings;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full w-max-full">
      <Slider {...defaultSettings} {...settings}>
        {children}
      </Slider>
    </div>
  );
}
