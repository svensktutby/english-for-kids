import './header.scss';
import {
  createFragmentFromString,
} from '../utilites';

export default class Header {
  constructor({
    classes,
  }) {
    this.classes = classes;
  }

  generateFragment() {
    this.headerTemplate = `<header class="${this.classes.join(' ')}">
                              <div class="container">
                                <div class="row"></div>
                              </div>
                            </header>`;

    return createFragmentFromString(this.headerTemplate);
  }
}
