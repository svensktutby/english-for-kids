import '../plugins';
import {
  createDomNode,
} from '../utilites';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Burger from '../Burger';
import Flipswitch from '../Flipswitch';

const data = require('../data.json');

const getFragment = (ClassName, config) => {
  const template = new ClassName(config);
  return template.generateFragment();
};

const renderPage = () => {
  const fragment = document.createDocumentFragment();
  const root = document.querySelector('#root');
  const pageContent = createDomNode('div', 'page__content');

  const linkTitles = data.map((item) => item.title);

  const header = getFragment(Header, {
    classes: ['page__header'],
  });

  const sidebar = getFragment(Sidebar, {
    id: 'sidebar',
    classes: ['sidebar', 'sidebar--hidden'],
    linkTitles,
  });
  console.log(sidebar);

  const burger = getFragment(Burger, {
    id: 'burger',
    classes: ['burger'],
    targetId: 'sidebar',
    targetClassToggle: 'sidebar--hidden',
  });

  const flipswitch = getFragment(Flipswitch, {
    dataShow: 'TRAIN',
    dataHide: 'PLAY',
    classes: ['flipswitch', 'flipswitch--header'],
  });

  header.querySelector('.row').append(burger);
  header.querySelector('.row').append(flipswitch);
  pageContent.append(header);
  fragment.append(sidebar);
  fragment.append(pageContent);
  root.append(fragment);
};

function showBurgerTarget() {
  const targetId = this.getAttribute('data-target-id');
  const targetClassToggle = this.getAttribute('data-target-class-toggle');
  if (targetId && targetClassToggle) {
    this.classList.toggle('burger--close');
    document.getElementById(targetId).classList.toggle(targetClassToggle);
  }
}

window.onload = () => {
  if (data) {
    renderPage();

    const burger = document.querySelector('#burger');
    burger.addEventListener('click', showBurgerTarget);
  }
};
