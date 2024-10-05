import { useEffect, useState } from "react";

export function useMatchMedia(
  mediaQuery: string,
  initialValue: boolean,
): boolean {
  const [isMatching, setIsMatching] = useState(initialValue);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQuery);

    const updateIsMatching = (event: MediaQueryListEvent) => {
      setIsMatching(event.matches);
    };

    setIsMatching(mediaQueryList.matches);

    mediaQueryList.addEventListener("change", updateIsMatching);

    return () => {
      mediaQueryList.removeEventListener("change", updateIsMatching);
    };
  }, [mediaQuery]);

  return isMatching;
}
