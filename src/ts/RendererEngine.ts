import { Component } from "./Component";

export type Newable<T> = { new (...args: any[]): T };

export class RendererEngine {
  components: Component[];
  rootElement: HTMLElement;

  constructor(params: { components: Newable<Component>[]; root: string }) {
    const { components, root } = params;
    this.components = components.map((component) => new component());
    this.rootElement = document.querySelector(root);
  }

  init() {
    this.components.forEach((component) => {
      component.create(this.rootElement);
    });
  }
}
