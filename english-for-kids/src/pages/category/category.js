import './category.scss';
// eslint-disable-next-line import/named
import { data, images, renderPage } from '../../components/App';
import CategoryContent from '../../components/CategoryContent';

const { categoryContent } = new CategoryContent(data[2], images).generateLayout();

window.onload = () => {
  if (data) {
    renderPage(categoryContent);
  }
};
