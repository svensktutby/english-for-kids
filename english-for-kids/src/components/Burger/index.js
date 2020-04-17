import './burger.scss';
import { createNode } from '../utils';

export default class Burger {
  constructor({
    targetId,
    targetClassToggle,
  }) {
    this.targetId = targetId;
    this.targetClassToggle = targetClassToggle;
    this.burger = createNode('button', 'burger',
      createNode('span', null,
        createNode('span', 'visually-hidden', 'Toggle sidebar')),
      null, ['id', 'burger'], ['data-target-id', this.targetId], ['data-target-class-toggle', this.targetClassToggle]);
    this.listener = this.showBurgerTarget.bind(this);
    this.burger.addEventListener('click', this.listener);
  }

  showBurgerTarget() {
    if (this.targetId && this.targetClassToggle) {
      this.burger.classList.toggle('burger--close');
      document.getElementById(this.targetId).classList.toggle(this.targetClassToggle);
    }
  }
}
