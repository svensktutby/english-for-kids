import '../plugins';
import { createNode, importAll } from '../utils';
import Header from '../Header';
import Sidebar from '../Sidebar';

const data = require('../data.json');

const imageSources = importAll(require.context('../../assets/img', false, /\.(gif|png|jpe?g|svg)$/i));
const images = imageSources.reduce((acc, src) => {
  const prependLength = 'assets/img/'.length;
  const value = src.substring(prependLength, src.indexOf('.'));
  acc[value] = src;
  return acc;
}, {});

const renderPage = () => {
  const state = window.localStorage.getItem('state') || 'train';
  const getPlayClass = (mode) => (mode === 'play' ? ' page__inner--play' : '');

  const { header } = new Header({ state }).generateLayout();

  const { sidebar } = new Sidebar({ data }).generateLayout();

  const pageInner = createNode('div', `page__inner${getPlayClass(state)}`, [
    sidebar,
    createNode('div', 'page__content', [
      header,
      createNode('main', 'page__main',
        createNode('div', 'container', null, null, ['id', 'content']))]),
  ]);

  document.body.prepend(pageInner);
  document.body.prepend(createNode('noscript', null, 'You need to enable JavaScript to run this app.'));
};

export {
  data,
  images,
  renderPage,
};
