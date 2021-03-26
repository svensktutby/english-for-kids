import './main-card.scss';
import { createNode } from '../utils';

export default class MainCard {
  constructor({ title, words }, imageSrc) {
    this.title = title;
    this.words = words;
    this.imageSrc = imageSrc;
    this.mainCard = createNode('div',
      'main-card main-card--train col col-xl-3 col-md-6 col-12',
      null,
      null,
      ['tabindex', '0']);
  }

  generateLayout() {
    const firstWord = this.words[0].word;
    createNode('a', 'main-card__link', [
      createNode('div', 'main-card__img-wrapper',
        createNode('img', 'main-card__image', null, null, ['src', this.imageSrc], ['width', '390'], ['height', '260'], ['alt', firstWord])),
      createNode('h2', 'main-card__title',
        createNode('span', 'main-card__title-inner', this.title))],
    this.mainCard, ['href', '/category.html']);

    return this;
  }
}
