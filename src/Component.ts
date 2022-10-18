import { h, VDom } from "./vdom";
export function Component ({name, color}, children: (VDom | string)[]): VDom {
  return h('h1', {'style': `color: ${color}`}, `Hello, ${name}!`, children[0]);
}
