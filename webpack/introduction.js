import { gsap } from 'gsap'

export default () => {
    const introduction = document.querySelector('.js-introduction');
    const loader = document.getElementById('loader');
    const loaderContainer = loader.querySelector('.loader__container');

    gsap.fromTo(loader, {scale: 1}, {
        duration: 1.4,
        translateX: '0%',
        translateY: '0%',
        scaleX: 0,
        scaleY: 0,
        ease: 'power4.inOut',
        delay: 1,
        onUpdate: () => {
            loaderContainer.style.transform = `translate(-50%, -50%) scale(${1 / gsap.getProperty(loader, 'scaleX')}, ${1 / gsap.getProperty(loader, 'scaleY')}) translateZ(0)`
        }
    });

    gsap.fromTo(introduction.querySelectorAll('.js-animate'), {
        opacity: 0,
        y: 50
    }, {
        opacity: 1,
        y: 0,
        duration: 0.66,
        stagger: 0.1,
        delay: 2.5,
        ease: 'power4.out'
    }, 0.1)

}