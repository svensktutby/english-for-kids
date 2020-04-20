import './category-content.scss';
import { createNode } from '../utils';
import CategoryCard from '../CategoryCard';

export default class CategoryContent {
  constructor({ title, words }, images) {
    this.title = title;
    this.words = words;
    this.images = images;
    this.inner = createNode('div', 'row justify-content-center justify-content-md-start');
    this.categoryContent = createNode('main', 'page__main',
      createNode('div', 'container', [
        this.inner,
        createNode('h2', 'visually-hidden category__title', this.title),
      ]), null, ['id', 'main']);
  }

  generateLayout() {
    this.words.forEach((item) => {
      const { categoryCard } = new CategoryCard(item, this.images).generateLayout();
      this.inner.append(categoryCard);
    });

    return this;
  }
}
