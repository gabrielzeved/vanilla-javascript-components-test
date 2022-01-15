import { Component } from "../Component";

export class Gallery extends Component {
  constructor() {
    super("gallery-wrapper", "section");
  }

  init() {
    const html = `
        <div class="gallery">
            <img src="https://picsum.photos/260/180" class="gallery-image1" />
            <img src="https://picsum.photos/280/150" class="gallery-image2" />
            <img src="https://picsum.photos/245/275" class="gallery-image3" />
        </div>
    `;
    this.element.innerHTML = html;
  }
}
