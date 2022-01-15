import { Component } from "../Component";

//@ts-ignore
import bannerBG from "../../assets/images/banner-bg.png";
//@ts-ignore
import pablin from "../../assets/images/pablin.png";
//@ts-ignore
import logoWhite from "../../assets/svgs/logo-white.svg";
//@ts-ignore
import bannerLogo from "../../assets/images/banner-logo.png";

export class Banner extends Component {
  constructor() {
    super("banner", "section");
  }

  init() {
    const html = `
        <img src="${bannerBG}" class="banner-bg" />

        <div class="banner-content">
            <span class="banner-text">
                Mais um evento <br/>de sucesso!
                <div class="banner-text-logo">
                    <img src="${bannerLogo}" />
                </div>
            </span>
            <img src="${pablin}" class="banner-image" alt="Imagem do CEO da Agência M3" />

            <img src="${logoWhite}" class="bottom-logo" />
        </div>
    `;
    this.element.innerHTML = html;
  }
}
