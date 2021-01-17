import Screen from './Screen'
export default class ScreenManager {
    constructor() {
       this.screens = {
           introduction: new Screen('#screen-introduction', true),
           experiences: new Screen('#screen-experiences'),
       }

       this.bindEvents();
       console.log(this.screens);
    }

    bindEvents() {
        document.querySelectorAll('[data-open-screen]').forEach( (btn) => {
            let screen = btn.getAttribute('data-open-screen');
            btn.addEventListener('click', this.open.bind(this, screen));
        });
    }

    open (name) {
        for(let key in this.screens) {
            this.screens[key].close();
        }

        this.screens[name].open();
    }
}