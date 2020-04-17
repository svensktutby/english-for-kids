import './category-card.scss';
import { createNode } from '../utils';

export default class CategoryCard {
  constructor({ data }) {
    this.data = data;
    this.categoryCard = createNode('div', 'category-card');
    this.listener = this.showBurgerTarget.bind(this);
    this.categoryCard.addEventListener('click', this.listener);
  }

  showBurgerTarget() {
    if (this.targetId && this.targetClassToggle) {
      this.burger.classList.toggle('burger--close');
      document.getElementById(this.targetId).classList.toggle(this.targetClassToggle);
    }
  }
}
