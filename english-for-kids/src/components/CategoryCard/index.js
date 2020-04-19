import './category-card.scss';
import { createNode } from '../utils';

export default class CategoryCard {
  constructor({ word, translation, audioSrc }, images) {
    this.word = word;
    this.translation = translation;
    this.audioSrc = audioSrc;
    this.images = images;
    this.categoryCard = createNode('div',
      'category-card category-card--train col col-xl-3 col-md-6 col-12',
      null,
      null,
      ['tabindex', '0']);
    this.clickHandler = (evt) => this.rotateCard(evt);
    this.mouseLeaveHandler = (evt) => this.rotateBackCard(evt);
    this.categoryCard.addEventListener('click', this.clickHandler);
  }

  generateLayout() {
    const imageSrc = this.images[this.word];

    createNode('div', 'category-card__inner', [
      createNode('div', 'category-card__front', [
        createNode('img', 'category-card__image', null, null, ['src', imageSrc], ['width', '390'], ['height', '260'], ['alt', this.word]),
        createNode('div', 'category-card__footer', [
          createNode('h3', 'category-card__title', this.word),
          createNode('button', 'category-card__rotate-btn')])]),
      createNode('div', 'category-card__back', [
        createNode('img', 'category-card__image', null, null, ['src', imageSrc], ['width', '390'], ['height', '260'], ['alt', this.translation]),
        createNode('div', 'category-card__footer',
          createNode('h3', 'category-card__title', this.translation))])],
    this.categoryCard);

    return this;
  }

  rotateCard(evt) {
    evt.preventDefault();
    const { target } = evt;

    if (target.classList.contains('category-card__rotate-btn')) {
      this.categoryCard.querySelector('.category-card__inner').classList.add('category-card__inner--rotate');
      this.categoryCard.addEventListener('mouseleave', this.mouseLeaveHandler);
      target.blur();
    }
  }

  rotateBackCard(evt) {
    evt.preventDefault();
    this.categoryCardInner = this.categoryCard.querySelector('.category-card__inner');

    if (this.categoryCardInner.classList.contains('category-card__inner--rotate')) {
      this.categoryCardInner.classList.remove('category-card__inner--rotate');
      this.categoryCard.removeEventListener('mouseleave', this.mouseLeaveHandler);
    }
  }
}
