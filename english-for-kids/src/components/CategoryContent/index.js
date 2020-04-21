import './category-content.scss';
import { createNode } from '../utils';
import CategoryCard from '../CategoryCard';

export default class CategoryContent {
  constructor({ title, words }, images) {
    this.title = title;
    this.words = words;
    this.images = images;
    this.cardsContainer = createNode('div', 'row justify-content-center',
      createNode('h2', 'visually-hidden', this.title));
    this.categoryContent = createNode('div', 'category-content', [
      this.cardsContainer,
      createNode('div', 'row justify-content-center',
        createNode('div', 'category-content__btn-wrapper',
          createNode('button', 'category-content__btn',
            createNode('span', 'category-content__btn-text', 'Start game'),
            null, ['type', 'button'])))]);
  }

  generateLayout() {
    this.words.forEach((item) => {
      const { categoryCard } = new CategoryCard(item, this.images).generateLayout();
      this.cardsContainer.append(categoryCard);
    });

    return this;
  }
}
