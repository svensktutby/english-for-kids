import './header.scss';
import { createNode } from '../utils';
import Burger from '../Burger';
import Flipswitch from '../Flipswitch';

export default class Header {
  constructor({ state }) {
    this.state = state;
    this.inner = createNode('div', 'row',
      createNode('h1', 'visually-hidden', 'English for kids - приложение для изучения английских слов детьми.'));
    this.header = createNode('header', 'page-header page__header',
      createNode('div', 'container', this.inner));
  }

  generateLayout() {
    const { burger } = new Burger({
      targetId: 'sidebar',
      targetClassToggle: 'sidebar--hidden',
    });

    const { flipswitch } = new Flipswitch({
      dataShow: 'TRAIN',
      dataHide: 'PLAY',
      state: this.state,
    });

    this.inner.append(burger);
    this.inner.append(flipswitch);

    return this;
  }
}
