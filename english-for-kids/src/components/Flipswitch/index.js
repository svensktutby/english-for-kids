import './flipswitch.scss';
import { createNode } from '../utils';

export default class Flipswitch {
  constructor({
    dataShow,
    dataHide,
    state,
  }) {
    this.dataShow = dataShow;
    this.dataHide = dataHide;
    this.state = state;
    this.toggle = createNode('input', 'flipswitch__checkbox', null, null, ['type', 'checkbox'], ['name', 'flipswitch'], ['id', 'flipswitch'], ['checked', '']);
    this.flipswitch = createNode('div', 'flipswitch page-header__flipswitch', [
      this.toggle,
      createNode('label', 'flipswitch__label', [
        createNode('span', 'flipswitch__inner', null, null, ['data-show', this.dataShow], ['data-hide', this.dataHide]),
        createNode('span', 'flipswitch__switch')],
      null, ['for', 'flipswitch']),
    ]);
    this.handler = (evt) => this.toggleState(evt);
    this.toggle.addEventListener('change', this.handler);

    this.toggle.checked = this.state === 'train';
  }

  toggleState() {
    const pageInner = document.querySelector('.page__inner');
    const state = window.localStorage.getItem('state');
    if (state === 'train') {
      pageInner.classList.add('page__inner--play');
      window.localStorage.setItem('state', 'play');
      this.toggle.checked = false;
      alert('Режим игры в настоящее время еще не реализован.');
    } else {
      pageInner.classList.remove('page__inner--play');
      window.localStorage.setItem('state', 'train');
      this.toggle.checked = true;
    }
  }
}
