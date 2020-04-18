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
  }

  generateLayout() {
    this.data.forEach((item) => {
      const imageSrc = this.images[item.words[0].word];
      const { mainCard } = new MainCard(item, imageSrc).generateLayout();
      this.inner.append(mainCard);
    });

    return this;
  }
}
