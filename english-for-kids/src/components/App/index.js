import '../plugins';
import { createNode, importAll } from '../utils';
import Header from '../Header';
import Sidebar from '../Sidebar';
import MainContent from '../MainContent';

const data = require('../data.json');

const imageSources = importAll(require.context('../../assets/img', false, /\.(gif|png|jpe?g|svg)$/i));
const images = imageSources.reduce((acc, src) => {
  const prependLength = 'assets/img/'.length;
  const value = src.substring(prependLength, src.indexOf('.'));
  acc[value] = src;
  return acc;
}, {});

const renderPage = () => {
  const { header } = new Header().generateLayout();

  const { sidebar } = new Sidebar({ data }).generateLayout();

  const { mainContent } = new MainContent({ data, images }).generateLayout();

  const pageInner = createNode('div', 'page__inner', [
    sidebar,
    createNode('div', 'page__content', [header, mainContent]),
  ]);

  document.body.prepend(pageInner);
  document.body.prepend(createNode('noscript', null, 'You need to enable JavaScript to run this app.'));
};

window.onload = () => {
  if (data) {
    renderPage();
  }
};
