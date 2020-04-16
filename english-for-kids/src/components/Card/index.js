import './card.scss';

export default class Card {
  constructor({
    id, title, imageUrl, audioUrl, ...rest
  }) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.audioUrl = audioUrl;
  }

  generateCard() {
    let template = '';
    const card = document.createElement('div');
    card.className = 'Card';
    card.setAttribute('data-id', this.id);

    this.urlToImage &&
    (template += `<img class="strategy__image" src=${this.urlToImage} alt="strategy">`)

    if (this.title || this.tags) {
      template += `<div class="strategy__content">`

      this.title &&
      (template += `<h3 class="strategy__name">${this.title}</h3>`)

      if(this.tags) {
        template += `<div class="strategy__tags tags">`

        this.tags.map(tag => {
          template += `<span class="tag tag_colored">${tag}</span>`
        })

        template += `</div>`
      }

      template += `</div>`
    }

    article.innerHTML = template;
    return article;
  }
}
