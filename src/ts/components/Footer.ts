import { Component } from "../Component";

//@ts-ignore
import facebook from "../../assets/svgs/facebook.svg";
//@ts-ignore
import instagram from "../../assets/svgs/instagram.svg";
//@ts-ignore
import linkedin from "../../assets/svgs/linkedin.svg";

export class Footer extends Component {
  constructor() {
    super("main-footer", "footer");
  }

  init() {
    const html = `
        <span>WWW.DIGITALM3.COM.BR</span>

        <div class="social-medias">
            <img src="${facebook}" />
            <img src="${instagram}" />
            <img src="${linkedin}" />
        </div>
    `;
    this.element.innerHTML = html;
  }
}
