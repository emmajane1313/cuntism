"use client";

import { useEffect, useRef, useState } from "react";
import Controls from "./components/modules/Controls";
import { PAGINAS } from "./lib/constantes";
import Image from "next/image";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [snapEnabled, setSnapEnabled] = useState(false);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (!container) return;

    const slideWidth = container.offsetWidth;
    setSnapEnabled(true);
    container.scrollTo({ left: index * slideWidth, behavior: "smooth" });
    setCurrentIndex(index);

    setTimeout(() => setSnapEnabled(false), 400);
  };

  const goNext = () => {
    if (currentIndex < PAGINAS.length - 1) scrollToIndex(currentIndex + 1);
  };

  const goPrev = () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  };

  const scrollHome = () => scrollToIndex(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const isTouchpad = Math.abs(e.deltaX) > 0 || e.deltaMode === 0;
      if (isTouchpad) return;

      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollBy({ left: e.deltaY });
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth);
      setCurrentIndex(index);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center overflow-hidden">
      <div
        ref={containerRef}
        className={`flex overflow-x-auto w-full h-full scroll-smooth ${
          snapEnabled ? "snap-x snap-mandatory" : "snap-none"
        }`}
      >
        {PAGINAS.map((contenido, i) => (
          <div key={i} className="shrink-0 h-full">
            <Image
              objectFit="contain"
              className="relative w-full h-full flex"
              alt={contenido?.texto}
              draggable={false}
              width={contenido?.anchura}
              height={contenido?.altura}
              src={`/images/${contenido?.imagen}`}
            />
          </div>
        ))}
      </div>

      <Controls
        scrollNext={goNext}
        scrollPrev={goPrev}
        scrollHome={scrollHome}
      />
    </div>
  );
}
