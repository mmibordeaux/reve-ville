import { gsap } from 'gsap'

export default () => {
    const introduction = document.querySelector('.js-introduction');
    gsap.to('#loader', {
        duration: 0.6,
        opacity: 0,
        delay: 2,
        onComplete: () => {
            gsap.set('#loader', {display: 'none'});
        }
    })
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