import { useEffect } from "react";

interface IntersectionObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  enabled?: boolean;
}

// Custom Intersection Observer Hook
export default function useIntersectionObserver(
  ref: React.RefObject<Element>,
  onIntersect: () => void,
  {
    root = null,
    rootMargin = "0px",
    threshold = 0.1,
    enabled = true,
  }: IntersectionObserverOptions = {}
) {
  useEffect(() => {
    if (!enabled || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
        }
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, onIntersect, root, rootMargin, threshold, enabled]);
}
