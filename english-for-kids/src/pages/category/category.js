import './category.scss';
// eslint-disable-next-line import/named
import { data, images, renderPage } from '../../components/App';
import CategoryContent from '../../components/CategoryContent';

const getCategoryIndex = () => {
  const category = window.localStorage.getItem('category');
  return data.findIndex((item) => item.title === category);
};

const { categoryContent } = new CategoryContent(data[getCategoryIndex()], images).generateLayout();

window.onload = () => {
  if (data) {
    renderPage(categoryContent);
  }
};
