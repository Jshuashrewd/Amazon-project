import { loadProducts, loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
// import '../data/backend-practice.js';
//import '../data/cart-class.js';

Promise.all([
  loadProductsFetch(),

]).then((values) => {
  console.log(values);
  renderOrderSummary();
  renderPaymentSummary();
})