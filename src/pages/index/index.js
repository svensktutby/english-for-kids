import './index.scss';
import { data, images, renderPage } from '../../components/App';
import MainContent from '../../components/MainContent';

const { mainContent } = new MainContent({ data, images }).generateLayout();

const injectContent = () => {
  const innerContent = document.querySelector('#content');
  innerContent.append(mainContent);
};

window.onload = () => {
  if (data) {
    renderPage();
    injectContent();
  }
};
