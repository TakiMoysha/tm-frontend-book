import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('my-element')
export class MyElement extends LitElement {
  @property()
  version = 'STARTING';

  render() {
    return html`
    <p>Welcome to the Lit tutorial!</p>j
    <p>This is the ${this.version} code.</p>
    `;
  }
}

