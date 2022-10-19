import { mount, h, VDom } from "./vdom";
function Component(_props: any, _children: VDom[]): VDom {
  let x = 0.0;
  return h(
    "h1",
    {
      style: `color: #090`,
      onclick: () => {
        alert(x++);
      },
    },
    `click me`
  );
}
mount("#app", h(Component, {}));
