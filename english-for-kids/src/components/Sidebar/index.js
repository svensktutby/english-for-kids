import './sidebar.scss';
import { createNode } from '../utils';

export default class Sidebar {
  constructor({ data }) {
    this.data = data;
    this.sidebarList = createNode('ul', 'sidebar__list',
      createNode('li', 'sidebar__item sidebar__item--active',
        createNode('a', 'sidebar__link', 'Main Page', null, ['href', 'index.html'])));
    this.sidebar = createNode('nav', 'sidebar sidebar--hidden', this.sidebarList, null, ['id', 'sidebar']);
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
}
