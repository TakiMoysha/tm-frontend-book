const template = document.createElement('template');

export class TMRating extends HTMLElement {
  constructor() {
    super();
    console.log('TMRating constructor');
  }
}

window.customElements.define('tm-rating', TMRating);
