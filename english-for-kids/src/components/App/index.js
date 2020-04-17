import '../plugins';
import { createNode } from '../utils';
import Header from '../Header';
import Sidebar from '../Sidebar';

const data = require('../data.json');

const renderPage = () => {
  const { header } = new Header().generateLayout();

  const { sidebar } = new Sidebar({
    data,
  }).generateLayout();

  const pageInner = createNode('div', 'page__inner', [
    sidebar,
    createNode('div', 'page__content', header),
  ]);

  document.body.prepend(pageInner);
  document.body.prepend(createNode('noscript', null, 'You need to enable JavaScript to run this app.'));
};

window.onload = () => {
  if (data) {
    renderPage();
  }
};
