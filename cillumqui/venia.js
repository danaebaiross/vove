class ScToggle extends HTMLElement {
  constructor() {
    super();
    // Attach a shadow DOM tree to this instance - ensures encapsulation
    const shadow = this.attachShadow({ mode: 'open' });

    // Create and style the toggle switch
    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'toggle-wrapper');

    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('class', 'toggle-input');

    const label = document.createElement('label');
    label.setAttribute('class', 'toggle-label');

    // Append elements to the shadow root
    shadow.appendChild(wrapper);
    wrapper.appendChild(input);
    wrapper.appendChild(label);

    // Styling the component within the shadow DOM
    const style = document.createElement('style');
    style.textContent = `
      .toggle-wrapper {
        display: inline-block;
        position: relative;
      }
      .toggle-input {
        display: none;
      }
      .toggle-label {
        width: 50px;
        height: 25px;
        background: grey;
        border-radius: 25px;
        cursor: pointer;
        position: relative;
        transition: background 0.3s;
      }
      .toggle-label::before {
        content: '';
        position: absolute;
        width: 23px;
        height: 23px;
        background: white;
        border-radius: 50%;
        top: 1px;
        left: 1px;
        transition: transform 0.3s;
      }
      .toggle-input:checked + .toggle-label {
        background: green;
      }
      .toggle-input:checked + .toggle-label::before {
        transform: translateX(25px);
      }
    `;
    shadow.appendChild(style);
  }
}

// Define the new element
customElements.define('sc-toggle', ScToggle);
