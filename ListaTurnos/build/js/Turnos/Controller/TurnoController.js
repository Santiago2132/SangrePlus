import TurnosTemplate from "../Template/TurnosTemplate";
import TurnosView from "../View/TurnosView";
export default class TurnosController {
    nuevaCitaView;
    constructor() {
        this.nuevaCitaView = new TurnosView(new TurnosTemplate());
    }
    init = () => {
        this.render();
    };
    render = () => {
        document.addEventListener('DOMContentLoaded', () => {
            this.nuevaCitaView.init().then(() => {
                console.log('IndexView initialized and rendered.');
            }).catch((error) => {
                console.error('Error initializing IndexView:', error);
            });
        });
    };
}
