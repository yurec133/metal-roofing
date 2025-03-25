import { useCallback } from "react";

export const useScroll = () => {
  const scrollToBlock = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 40;
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementTop - offset,
        behavior: "smooth",
      });
    }
  }, []);

  return { scrollToBlock };
};
