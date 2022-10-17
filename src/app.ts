import { mount, h } from './vdom';
import { Component } from './Component';
mount("#app", h(Component, { color: '#090', name: 'world' }));
