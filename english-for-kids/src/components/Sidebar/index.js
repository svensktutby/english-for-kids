import './sidebar.scss';
import {
  createFragmentFromString,
} from '../utilites';

export default class Sidebar {
  constructor({
    id,
    classes,
    linkTitles,
  }) {
    this.id = id;
    this.classes = classes;
    this.linkTitles = linkTitles;
  }

  generateFragment() {
    this.sidebarTemplate = `<nav
                              class="${this.classes.join(' ')}"
                              id="${this.id}">
                              <ul class="sidebar__list">
                                <li class="sidebar__item sidebar__item--active">
                                  <a class="sidebar__link" href="index.html">Main Page</a>
                                </li>
                              </ul>
                             </nav>`;

    this.sidebar = createFragmentFromString(this.sidebarTemplate);
    this.sidebarList = this.sidebar.querySelector('.sidebar__list');

    this.linkTitles.forEach((item) => {
      const href = `category.html#${item
        .toLowerCase()
        .replace(/\s/g, '-')
        .replace(/\(|\)/g, '')}`;

      this.sidebarItemTemplate = `<li class="sidebar__item">
                                     <a class="sidebar__link" href="${href}">${item}</a>
                                   </li>`;

      this.sidebarList.innerHTML += this.sidebarItemTemplate;
    });

    return this.sidebar;
  }
}
