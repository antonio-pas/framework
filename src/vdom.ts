export type VDom = {
  type: string | Function;
  props: any;
  children: (VDom | string)[];
};
export function render(node: VDom): HTMLElement {
  if (typeof node.type == "function") {
    return node.type(node.props);
  }
  let element = document.createElement(node.type);
  for (let key in node.props) {
    element.setAttribute(key, node.props[key]);
  }
  node.children
    .map((child) => {
      return typeof child == "string"
        ? document.createTextNode(child)
        : render(child);
    })
    .map((child) => {
      element.appendChild(child);
    });
  return element;
}
export function mount(element: HTMLElement | string, vdom: VDom): void {
  (typeof element == "string"
    ? document.querySelector(element)
    : element
  ).appendChild(render(vdom));
}
export function h(
  type: string | Function,
  props: object,
  ...children: (VDom | string)[]
): VDom {
  return { type, props, children };
}
