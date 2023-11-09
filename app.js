import Store from "./services/Store.js";
import API from "./services/API.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

// Link web components
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from './components/DetailsPage.js';
import { OrderPage } from './components/OrderPage.js';

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', () => {
   loadData();
   app.router.init();
});


// const $ = () => document.querySelector.call(this, arguments);
// const $$ = () => document.querySelectorAll.call(this, arguments);
// HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
// HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
// HTMLElement.prototype.$ = (s) => this.querySelector(s);
// HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);