"use client";

import { useState, useEffect, useRef, type RefObject } from "react";

export const useFade = (ref: RefObject<HTMLElement | null>) => {
  const fadeClasses = {
    init: ["opacity-0", "translate-y-10"],
    fade: [
      'opacity-100',
      'transition-all',
      'duration-500',
      'ease-in-out',
      'translate-y-0'
    ]
  }

  const observerRef = useRef<IntersectionObserver | null>(null);
  const [onScreen, setOnScreen] = useState(false);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(([entry]) => {
      setOnScreen(entry.isIntersecting);
      if (entry.isIntersecting) {
        fadeClasses.init.forEach((style) => entry.target.classList.remove(style));
        fadeClasses.fade.forEach((style) => entry.target.classList.add(style));
      }
    }, {
      threshold: 0
    });
  }, []);

  useEffect(() => {
    // handle ref initialization and clean up
    if (ref.current) {
      fadeClasses.init.forEach((initClass) => {
        ref.current?.classList.add(initClass);
      });

      observerRef.current?.observe(ref.current);
    } else {
      console.log(ref);
    }
    return () => {
      observerRef.current?.disconnect();
    }
  }, [ref]);

  return {
    onScreen: onScreen,
    classes: fadeClasses
  };
}