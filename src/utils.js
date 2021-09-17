import { useEffect, useState } from "react";

export const useScrollToTop = (initialValue = false) => {
  const [scrollToTop, setScrollToTop] = useState(initialValue);

  useEffect(() => {
    if (scrollToTop) {
      setScrollToTop(false);
    }
    try {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    } catch (e) {
      window.scrollTo(0, 0);
    }
  }, [scrollToTop, setScrollToTop]);
  return setScrollToTop;
};
