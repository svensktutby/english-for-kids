import './category.scss';
import { data, images, renderPage } from '../../components/App';
import CategoryContent from '../../components/CategoryContent';

const getCategoryIndex = () => {
  const category = window.localStorage.getItem('category');
  return data.findIndex((item) => item.title === category);
};

const injectContent = () => {
  // eslint-disable-next-line max-len
  const { categoryContent } = new CategoryContent(data[getCategoryIndex()], images).generateLayout();
  const innerContent = document.querySelector('#content');
  innerContent.innerHTML = '';
  innerContent.append(categoryContent);
};

window.onload = () => {
  if (data) {
    renderPage();
    injectContent();
  }
};
