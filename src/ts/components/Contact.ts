import { Component } from "../Component";

//@ts-ignore
import logo from "../../assets/images/logo-bw.png";

export class Contact extends Component {
  constructor() {
    super("contact-info", "section");
  }

  init() {
    const html = `
        <div class="contact-logo">
            <img src="${logo}" />
        </div>

        <div class="contact-info-wrapper">
            
            <div>
                <h2 class="c-primary">olá!</h2>
                <h3>+55 11 9999 9999</h3>
                <span>m3academy@digitalm3.com.br</span>
            </div>

            <div>
                <h4>nova friburgo</h4>
                <h5>+55 99999999</h5>
            </div>

        </div>
    `;
    this.element.innerHTML = html;
  }
}
