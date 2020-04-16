import './flipswitch.scss';
import {
  createFragmentFromString,
} from '../utilites';

export default class Flipswitch {
  constructor({
    dataShow,
    dataHide,
    classes,
  }) {
    this.dataShow = dataShow;
    this.dataHide = dataHide;
    this.classes = classes;
  }

  generateFragment() {
    this.flipswitchTemplate = `<div class="${this.classes.join(' ')}">
                               <input
                                class="${this.classes[0]}__checkbox"
                                type="checkbox"
                                name="${this.classes[0]}"
                                id="${this.classes[0]}"
                                checked>
                               <label class="${this.classes[0]}__label" for="${this.classes[0]}">
                                 <span class="${this.classes[0]}__inner"
                                 data-show="${this.dataShow}"
                                 data-hide="${this.dataHide}"
                                 ></span>
                                 <span class="${this.classes[0]}__switch"></span>
                               </label>
                               </div>`;

    return createFragmentFromString(this.flipswitchTemplate);
  }
}
