import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

// Link web components
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';
import ProductItem from "./components/ProductItem.js";
import CartItem from "./components/CartItem.js";

// different way to define web components in app
customElements.define("cart-item", CartItem);

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
   loadData();
   app.router.init();
});

window.addEventListener('appcartchange', event => {
   const badge = document.getElementById('badge');
   const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
   badge.textContent = qty;
   badge.hidden = qty == 0;
})


// const $ = () => document.querySelector.call(this, arguments);
// const $$ = () => document.querySelectorAll.call(this, arguments);
// HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
// HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
// HTMLElement.prototype.$ = (s) => this.querySelector(s);
// HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);