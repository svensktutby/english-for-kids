import './flipswitch.scss';
import { createNode } from '../utils';

export default class Flipswitch {
  constructor({
    dataShow,
    dataHide,
  }) {
    this.dataShow = dataShow;
    this.dataHide = dataHide;
    this.flipswitch = createNode('div', 'flipswitch page-header__flipswitch', [
      createNode('input', 'flipswitch__checkbox', null, null, ['type', 'checkbox'], ['name', 'flipswitch'], ['id', 'flipswitch'], ['checked', '']),
      createNode('label', 'flipswitch__label', [
        createNode('span', 'flipswitch__inner', null, null, ['data-show', this.dataShow], ['data-hide', this.dataHide]),
        createNode('span', 'flipswitch__switch')],
      null, ['for', 'flipswitch']),
    ]);
    this.handler = (evt) => this.flipswitchHandler(evt);
    this.flipswitch.addEventListener('change', this.handler);
  }

  flipswitchHandler() {
    const pageInner = document.querySelector('.page__inner');
    if (!this.flipswitch.checked) {
      this.flipswitch.checked = true;
      pageInner.classList.add('page__inner--theme-play');
    } else if (this.flipswitch.checked) {
      pageInner.classList.remove('page__inner--theme-play');
      this.flipswitch.checked = false;
    }
  }
}
