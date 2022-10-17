import { h, VDom } from "./vdom";
export function Component ({name, color}): VDom {
  return h('h1', {'style': `color: ${color}`}, `Hello, ${name}!`);
}
