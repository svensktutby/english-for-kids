import './main-content.scss';
import { createNode } from '../utils';
import MainCard from '../MainCard';

export default class MainContent {
  constructor({ data, images }) {
    this.data = data;
    this.images = images;
    this.inner = createNode('div', 'row justify-content-center justify-content-md-start');
    this.mainContent = createNode('main', 'page__main',
      createNode('div', 'container', this.inner), null, ['id', 'main']);
    this.handler = (evt) => this.linkClickHandler(evt);
    this.mainContent.addEventListener('click', this.handler);
  }

  generateLayout() {
    this.data.forEach((item) => {
      const imageSrc = this.images[item.words[0].word];
      const { mainCard } = new MainCard(item, imageSrc).generateLayout();
      this.inner.append(mainCard);
    });

    return this;
  }

  linkClickHandler(evt) {
    const { target } = evt;
    this.mainContentItem = target.closest('.main-card__link');

    if (this.mainContentItem) {
      window.localStorage.setItem('category', this.mainContentItem.querySelector('.main-card__title-inner').textContent);
    }
  }
}
