import { Component } from "../Component";

//@ts-ignore
import google from "../../assets/images/google.png";
//@ts-ignore
import ecommerceBrasil from "../../assets/images/ecommerce-brasil.png";
//@ts-ignore
import logo from "../../assets/images/logo-bw.png";

export class Partners extends Component {
  constructor() {
    super("partners", "section");
  }

  init() {
    const html = `
        <img src="${google}" />
        <img src="${ecommerceBrasil}" />
        <img src="${logo}" />
    `;
    this.element.innerHTML = html;
  }
}
