class TMCustomElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = '<slot></slot>';
  }
}

customElements.define('tm-custom-element', TMCustomElement);
