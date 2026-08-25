import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop - Resets window scroll position to top smoothly
 * on pathname changes, or scrolls to the target hash anchor if specified.
 */
export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow the DOM/page transition to mount before scrolling to element
      const timeout = setTimeout(() => {
        const targetId = hash.replace("#", "");
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const headerOffset = 75;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 120);

      return () => clearTimeout(timeout);
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" as ScrollBehavior,
      });
    }
  }, [pathname, hash]);

  return null;
};

