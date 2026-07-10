import { useEffect, useState } from "react";
import { useIsMobile } from "../../../hooks/useIsMobile";
const BOARD_CELLS = 15;
const MAX_FIELD_SIZE = 42; // desktop: 42 * 15 = 630px
const MOBILE_PADDING = 16; // margines po bokach na telefonie
/**
 * Liczy rozmiar pojedynczego pola planszy tak, aby CAŁA plansza (15 pól)
 * zmieściła się w viewport zarówno w pionie, jak i poziomie.
 *
 * Kluczowa zmiana vs. oryginał: fieldSize zależy od szerokości ekranu,
 * a nie jest stały — dlatego pola zawsze skalują się razem z planszą.
 */
const useHandleResize = () => {
  const isMobile = useIsMobile();
  const [fieldSize, setFieldSize] = useState<number>(MAX_FIELD_SIZE);
  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      if (isMobile) {
        // Na telefonie plansza ma zająć prawie całą szerokość ekranu.
        // Odejmujemy niewielki margines, żeby nie dotykała krawędzi.
        // Dodatkowo ograniczamy wysokość — zostawiamy miejsce na TopPanel + rack.
        const maxByWidth = (vw - MOBILE_PADDING * 2) / BOARD_CELLS;
        const maxByHeight = (vh * 0.75) / BOARD_CELLS; // 75% wysokości ekranu
        const size = Math.floor(Math.min(maxByWidth, maxByHeight));
        setFieldSize(Math.max(18, Math.min(size, MAX_FIELD_SIZE)));
      } else {
        setFieldSize(MAX_FIELD_SIZE);
      }
    };
    compute();
    window.addEventListener("resize", compute);
    window.addEventListener("orientationchange", compute);
    return () => {
      window.removeEventListener("resize", compute);
      window.removeEventListener("orientationchange", compute);
    };
  }, [isMobile]);
  return { fieldSize, isMobile };
};

export default useHandleResize;