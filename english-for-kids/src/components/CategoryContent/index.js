import './category-content.scss';
import { createNode, shuffleArray } from '../utils';
import CategoryCard from '../CategoryCard';

export default class CategoryContent {
  constructor({ title, words }, images) {
    this.title = title;
    this.words = words;
    this.images = images;
    this.cardList = createNode('div', 'row justify-content-center category-content__card-list',
      createNode('h2', 'visually-hidden', this.title));
    this.scoreOutput = createNode('div', 'category-content__score-output', [this.scoreStar, this.scoreStarr]);
    this.playButton = createNode('button', 'category-content__btn',
      createNode('span', 'category-content__btn-text', 'Start game'),
      null, ['type', 'button']);
    this.categoryContent = createNode('div', 'category-content', [
      createNode('div', 'row justify-content-center category-content__score',
        createNode('div', 'row justify-content-center category-content__score-inner', this.scoreOutput)),
      this.cardList,
      createNode('div', 'row justify-content-center',
        createNode('div', 'category-content__btn-wrapper',
          this.playButton))]);
    this.startGameClickHandler = (evt) => this.startGame(evt);
    this.playAudioClickHandler = (evt) => this.playAudio(evt);
    this.cardClickHandler = (evt) => this.updateGameRating(evt);
    this.playButton.addEventListener('click', this.startGameClickHandler, { once: true });
    this.scorePoints = {
      win: 0,
      lose: 0,
    };
    this.serviceAudioSources = {
      correctAudioSrc: 'assets/audio/correct.mp3',
      errorAudioSrc: 'assets/audio/error.mp3',
      successAudioSrc: 'assets/audio/success.mp3',
      failureAudioSrc: 'assets/audio/failure.mp3',
    };
  }

  generateLayout() {
    this.words.forEach((item) => {
      const { categoryCard } = new CategoryCard(item, this.images).generateLayout();
      this.cardList.append(categoryCard);
    });

    return this;
  }

  playAudio(pause) {
    if (this.shuffleAudioSources.length) {
      this.lastAudioSrc = this.shuffleAudioSources[this.shuffleAudioSources.length - 1];
      setTimeout(() => new Audio(this.lastAudioSrc).play(), pause);
    }
    this.playButton.blur();
  }

  startGame() {
    const prependPause = 500;
    const audioSources = Array.from(this.cardList.querySelectorAll('.category-card'), (item) => item.dataset.audio);
    this.shuffleAudioSources = shuffleArray(audioSources, false);
    this.playButton.classList.add('category-content__btn--play');
    this.playButton.addEventListener('click', this.playAudioClickHandler);
    this.cardList.addEventListener('click', this.cardClickHandler);
    this.playAudio(prependPause);
    this.playButton.blur();
    window.localStorage.setItem('playState', 'active');
  }

  // eslint-disable-next-line class-methods-use-this
  addStar(win) {
    const winClass = win ? ' category-content__score-star--win' : '';
    return createNode('span', `category-content__score-star${winClass}`, '★');
  }

  createResultOutput({
    audioSrc,
    smile,
    cssClass,
    text,
  }) {
    new Audio(audioSrc).play();
    this.resultNode = createNode('div', `category-content__result${cssClass}`, [
      createNode('h3', 'category-content__result-title', text),
      createNode('div', 'category-content__result-smile', smile)]);
    // this.resultNode.classList.add(cssClass);

    this.categoryContent.append(this.resultNode);
  }

  showResult(result) {
    const prependPause = 1000;
    this.categoryContent.innerHTML = '';
    setTimeout(() => {
      if (result) {
        this.createResultOutput({
          audioSrc: this.serviceAudioSources.failureAudioSrc,
          smile: '😦',
          cssClass: ' category-content__result--failure',
          text: result === 1 ? '1 error' : `${result} errors`,
        });
      } else {
        this.createResultOutput({
          audioSrc: this.serviceAudioSources.successAudioSrc,
          smile: '😀',
          cssClass: ' category-content__result--success',
          text: 'Win',
        });
      }
    }, prependPause);

    setTimeout(() => {
      window.location = '/';
    }, prependPause * 3);

    window.localStorage.setItem('playState', 'inactive');
  }

  updateGameRating(evt) {
    evt.preventDefault();
    const { target } = evt;
    const currentCard = target.closest('.category-card');
    const prependPause = 1000;

    if (currentCard && !currentCard.dataset.checked) {
      if (currentCard.dataset.audio === this.lastAudioSrc) {
        new Audio(this.serviceAudioSources.correctAudioSrc).play();
        currentCard.classList.add('category-card--inactive');
        currentCard.dataset.checked = 'true';
        this.scoreOutput.append(this.addStar(true));
        this.shuffleAudioSources.pop();
        this.playAudio(prependPause);
        this.scorePoints.win++;
      } else {
        new Audio(this.serviceAudioSources.errorAudioSrc).play();
        this.scoreOutput.append(this.addStar(false));
        this.scorePoints.lose++;
      }
    }

    if (!this.shuffleAudioSources.length) {
      this.showResult(this.scorePoints.lose);
    }
  }
}
