import './sidebar.scss';
import { createNode } from '../utils';

export default class Sidebar {
  constructor({ data }) {
    this.data = data;
    this.sidebarList = createNode('ul', 'sidebar__list',
      createNode('li', 'sidebar__item sidebar__item--active',
        createNode('a', 'sidebar__link', 'Main Page', null, ['href', 'index.html'])));
    this.sidebar = createNode('nav', 'sidebar sidebar--hidden sidebar--train', this.sidebarList, null, ['id', 'sidebar']);
    this.handler = (evt) => this.linkClickHandler(evt);
    this.sidebarList.addEventListener('click', this.handler);
  }

  generateLayout() {
    const linkTitles = this.data.map((item) => item.title);

    linkTitles.forEach((item) => {
      const href = `category.html#${item
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/\(|\)/g, '')}`;

      createNode('li', 'sidebar__item',
        createNode('a', 'sidebar__link', item, null, ['href', href]),
        this.sidebarList);
    });

    return this;
  }

  linkClickHandler(evt) {
    const { target } = evt;
    // evt.preventDefault();
    this.sidebarItem = target.closest('.sidebar__item');
    this.sidebarItems = this.sidebarList.querySelectorAll('.sidebar__item');

    if (this.sidebarItem) {
      this.sidebarItems.forEach((item) => item.classList.remove('sidebar__item--active'));
      this.sidebarItem.classList.add('sidebar__item--active');
    }
    if (target.classList.contains('sidebar__item')) {
      this.sidebarItems.forEach((item) => item.classList.remove('sidebar__item--active'));
      target.classList.add('sidebar__item--active');
    }
  }
}
