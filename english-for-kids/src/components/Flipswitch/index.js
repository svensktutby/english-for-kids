import './flipswitch.scss';
import { createNode } from '../utils';

export default class Flipswitch {
  constructor({
    dataShow,
    dataHide,
  }) {
    this.dataShow = dataShow;
    this.dataHide = dataHide;
    this.flipswitch = createNode('div', 'flipswitch flipswitch--header', [
      createNode('input', 'flipswitch__checkbox', null, null, ['type', 'checkbox'], ['name', 'flipswitch'], ['id', 'flipswitch'], ['checked', '']),
      createNode('label', 'flipswitch__label', [
        createNode('span', 'flipswitch__inner', null, null, ['data-show', this.dataShow], ['data-hide', this.dataHide]),
        createNode('span', 'flipswitch__switch')],
      null, ['for', 'flipswitch']),
    ]);
  }
}
