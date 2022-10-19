export type VDom = {
  type: string | Function;
  props: any;
  children: VDom[];
} | string;
export function render(node: VDom): HTMLElement | Text {
  if (typeof node === "string")
    return document.createTextNode(node);
  if (typeof node.type === "function")
    return render(node.type(node.props, node.children));

  let element = document.createElement(node.type);
  for (let key in node.props) {
    if (key.startsWith('on')) {
      element.addEventListener(key.slice(2).toLowerCase(), node.props[key]);
    }
    element.setAttribute(key, node.props[key]);
  }
  node.children
    .filter((child) => {
      return child !== undefined;
    })
    .map((child) => {
      return render(child);
    })
    .map((child) => {
      element.appendChild(child);
    });
  return element;
}
export function mount(element: HTMLElement | string, vdom: VDom): void {
  (typeof element === "string"
    ? document.querySelector(element)
    : element
  ).appendChild(render(vdom));
}
export function h(
  type: string | Function,
  props: object,
  ...children: VDom[]
): VDom {
  console.log(children)
  return { type, props, children };
}
