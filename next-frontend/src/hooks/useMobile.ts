import { mobileWidth } from "@/constants/is-mobile-width";
import { useEffect, useState } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < mobileWidth;

    if (isMobile) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    const handleResize = () => {
      const isMobileNow = window.innerWidth < mobileWidth;

      setIsMobile(isMobileNow);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { isMobile };
}
