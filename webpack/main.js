import { tns } from "tiny-slider/src/tiny-slider"
import ScreenManager from './ScreenManager'

(function() {
    function fixRealVH() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', vh + 'px');
    };
    window.addEventListener('resize', fixRealVH);
    fixRealVH();

    window.onload = () => {
        new ScreenManager();
        let slider = tns({
            container: '.js-slider',
            items: 1,
            touch: true,
            mouseDrag: true,
            navContainer: '.js-slider-nav',
            controlsContainer: '.js-slider-controls',
            disable: true,
            responsive: {
                640: {
                  disable: false,
                  items: 1
                },
              }
        });
    }

    
})();