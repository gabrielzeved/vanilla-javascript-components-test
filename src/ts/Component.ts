export abstract class Component {
  name: string;
  element: HTMLElement;
  elementType: string;
  selectorElements: HTMLElement[] = [];

  constructor(name: string, elementType: string = "div") {
    this.name = name;
    this.elementType = elementType;
  }

  create(root: HTMLElement) {
    let child = document.createElement(this.elementType);
    child.classList.add(this.name);
    root.appendChild(child);
    this.element = child;
    this.init();
  }

  abstract init();

  selectors(selectorsClasses: string[]) {
    selectorsClasses.forEach((className) => {
      this.selectorElements[className] = document.querySelector(
        `.${className}`
      );
    });
  }

  events() {}
}
