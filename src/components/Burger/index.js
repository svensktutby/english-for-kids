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
    this.handler = (evt) => this.burgerClickHandler(evt);
    document.addEventListener('click', this.handler);
    this.targetItem = '';
  }

  openBurgerTarget() {
    this.targetItem = document.getElementById(this.targetId);
    this.burger.classList.add('burger--close');
    this.targetItem.classList.remove(this.targetClassToggle);
  }

  closeBurgerTarget() {
    this.burger.classList.remove('burger--close');
    this.targetItem.classList.add(this.targetClassToggle);
  }

  burgerClickHandler(evt) {
    const { target } = evt;

    if (this.targetId && this.targetClassToggle && evt.target !== this.targetItem) {
      if ((target === this.burger
        || target.closest('#burger'))
        && !this.burger.classList.contains('burger--close')) {
        this.openBurgerTarget();
      } else if (this.burger.classList.contains('burger--close')) {
        this.closeBurgerTarget();
      }
      this.burger.blur();
    }
  }
}
