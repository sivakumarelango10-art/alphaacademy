import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop - Resets window scroll position to top smoothly
 * whenever the route pathname changes, unless navigating to a hash anchor.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" as ScrollBehavior,
      });
    }
  }, [pathname, hash]);

  return null;
};
