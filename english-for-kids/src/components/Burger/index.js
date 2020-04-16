import './burger.scss';
import {
  createFragmentFromString,
} from '../utilites';

export default class Burger {
  constructor({
    id,
    classes,
    targetId,
    targetClassToggle,
  }) {
    this.id = id;
    this.classes = classes;
    this.targetId = targetId;
    this.targetClassToggle = targetClassToggle;
  }

  generateFragment() {
    this.burgerTemplate = `<button
                             class="${this.classes.join(' ')}"
                             id="${this.id}"
                             data-target-id="${this.targetId}"
                             data-target-class-toggle="${this.targetClassToggle}">
                             <span>
                               <span class="visually-hidden">Toggle sidebar</span>
                             </span>
                            </button>`;

    return createFragmentFromString(this.burgerTemplate);
  }
}
