import { useRef } from "react";
import { useInView as useIntersectionObserver } from "react-intersection-observer";

/**
 * Convenience hook that returns [ref, inView, entry].
 * triggerOnce=true means the animation fires only once.
 */
export function useInView(options = {}) {
  const { ref, inView, entry } = useIntersectionObserver({
    threshold: 0.15,
    triggerOnce: true,
    ...options,
  });
  return [ref, inView, entry];
}
