// src/components/JavaScriptInitializer.jsx
import { useEffect } from 'react';
import initThemeToggle from '../js/modules/SwitchTheme.js';
import DropdownFocus from '../js/modules/DropdownFocus.js';
import CardCarousel from '../js/modules/CardCarousel.js';

export default function JavaScriptInitializer() {
  useEffect(() => {
    let modules = {
      dropdownFocus: null,
      cardCarousel: null
    };

    const initializeModules = () => {
      try {
        // Verificar se os elementos existem antes de inicializar
        const sidebar = document.getElementById('sidebar');
        const cardsCarousel = document.getElementById('cardsCarousel');
        
        console.log('🔍 Verificando elementos DOM:', {
          sidebar: !!sidebar,
          cardsCarousel: !!cardsCarousel
        });

        // Inicializar gerenciamento de foco do dropdown
        if (!modules.dropdownFocus) {
          modules.dropdownFocus = new DropdownFocus();
          console.log('✅ DropdownFocus inicializado');
        }

        // Inicializar sistema de mudança de tema
        initThemeToggle();
        console.log('✅ ThemeToggle inicializado');

        
        // Inicializar carrossel de cards apenas se o elemento existir
        if (cardsCarousel && !modules.cardCarousel) {
          modules.cardCarousel = new CardCarousel();
        } else if (!cardsCarousel) {
          console.log('⚠️ Elemento do CardCarousel não encontrado, tentando novamente...');
        }
      } catch (error) {
        console.error('❌ Erro ao inicializar módulos:', error);
      }
    };

    // Primeira tentativa imediata
    initializeModules();

    // Observer para detectar quando novos elementos são adicionados ao DOM
    const observer = new MutationObserver((mutations) => {
      let shouldRetry = false;
      
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            if (node.id === 'sidebar' || 
                node.id === 'cardsCarousel' ||
                node.querySelector('#sidebar') ||
                node.querySelector('#cardsCarousel')) {
              shouldRetry = true;
            }
          }
        });
      });

      if (shouldRetry) {
        setTimeout(initializeModules, 100);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);

  // Este componente não renderiza nada
  return null;
}
