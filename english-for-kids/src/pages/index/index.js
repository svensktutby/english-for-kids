import './index.scss';
// eslint-disable-next-line import/named
import { data, images, renderPage } from '../../components/App';
import MainContent from '../../components/MainContent';

const { mainContent } = new MainContent({ data, images }).generateLayout();

window.onload = () => {
  if (data) {
    renderPage(mainContent);
  }
};
