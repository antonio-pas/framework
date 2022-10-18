import { mount, h } from './vdom';
import { Component } from './Component';
let c = h(Component, {color:'#900', name:'underworld'})
mount("#app", h(Component, { color: '#090', name: 'world' }, c));
