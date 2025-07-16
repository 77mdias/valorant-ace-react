// src/hooks/useCarousel.js
import { useEffect, useRef } from 'react';
import CardCarousel from '../js/modules/CardCarousel.js';

export default function useCarousel() {
  const carouselInstance = useRef(null);

  useEffect(() => {
    const initCarousel = () => {
      const cardsCarousel = document.getElementById('cardsCarousel');
      
      if (cardsCarousel && !carouselInstance.current) {
        try {
          carouselInstance.current = new CardCarousel();
          console.log('✅ Carrossel inicializado na página Home');
        } catch (error) {
          console.error('❌ Erro ao inicializar carrossel:', error);
        }
      }
    };

    // Tentar inicializar imediatamente
    initCarousel();

    // Tentar novamente após um delay
    const timeout = setTimeout(initCarousel, 200);

    return () => {
      clearTimeout(timeout);
      carouselInstance.current = null;
    };
  }, []);

  return carouselInstance.current;
}
