import { Component } from "../Component";
//@ts-ignore
import image from "../../assets/images/logo.png";

export class Header extends Component {
  constructor() {
    super("main-header", "header");

    const selectorsQueries = ["nav-list"];
    this.selectors(selectorsQueries);
  }

  init() {
    const html = `
        <div class="logo-image">
            <img src="${image}" alt="Logo Agência M3" />
        </div>

        <nav class="nav-wrapper">
            <ul class="nav-list">
                <li class="nav-item">Serviços</li>
                <li class="nav-item">Blog</li>
                <li class="nav-item">Clientes</li>
                <li class="nav-item highlight">Contato</li>
            </ul>
        </nav>
    `;

    this.element.innerHTML = html;
  }

  render() {
    throw new Error("Method not implemented.");
  }
}
