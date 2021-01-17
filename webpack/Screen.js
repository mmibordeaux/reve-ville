import { gsap } from 'gsap'

export default class Screen {
    constructor(selector, opened = false) {
        this.dom = document.querySelector(selector);
        this.isOpened = false;

        console.log(gsap)
        if (opened) this.open(true);
    }

    open(immediate = false) {
        if (this.isOpened) return false;
        
        this.isOpened = true;

        this.dom.classList.add('is-visible');

        gsap.to(this.dom, {
            opacity: 1,
            duration: immediate ? 0 : 0.33,
            display: 'block'
        });
    }

    close() {
        if (!this.isOpened) return false;

        this.isOpened = false;

        this.dom.classList.remove('is-visible');

        gsap.to(this.dom, {
            opacity: 0,
            duration: 0.33,
            onComplete: () => {
                gsap.set(this.dom, { display: 'none' });
            }
        });
    }
}