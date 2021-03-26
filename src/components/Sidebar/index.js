import './sidebar.scss';
import { createNode } from '../utils';

export default class Sidebar {
  constructor({ data }) {
    this.data = data;
    this.activeItem = window.localStorage.getItem('category') || 'Main Page';
    this.sidebarList = createNode('ul', 'sidebar__list',
      createNode('li', `sidebar__item${this.getActiveClass('Main Page')}`,
        createNode('a', 'sidebar__link', 'Main Page', null, ['href', 'index.html'])));
    this.sidebar = createNode('nav', 'sidebar sidebar--hidden sidebar--train', this.sidebarList, null, ['id', 'sidebar']);
    this.handler = (evt) => this.linkClickHandler(evt);
    this.sidebarList.addEventListener('click', this.handler);
  }

  getActiveClass(item) {
    return this.activeItem === item ? ' sidebar__item--active' : '';
  }

  generateLayout() {
    const linkTitles = this.data.map((item) => item.title);

    linkTitles.forEach((item) => {
      createNode('li', `sidebar__item${this.getActiveClass(item)}`,
        createNode('a', 'sidebar__link', item, null, ['href', '/category.html']),
        this.sidebarList);
    });

    return this;
  }

  linkClickHandler(evt) {
    const { target } = evt;

    this.sidebarItem = target.closest('.sidebar__item');
    this.sidebarItems = this.sidebarList.querySelectorAll('.sidebar__item');

    if (target.classList.contains('sidebar__link') && this.sidebarItem) {
      window.localStorage.setItem('playState', 'inactive');
      const { href } = target;
      window.localStorage.setItem('category', target.textContent);
      this.sidebarItems.forEach((item) => item.classList.remove('sidebar__item--active'));
      this.sidebarItem.classList.add('sidebar__item--active');
      window.location = href;
    }
  }
}
