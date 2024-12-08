import { loadProducts, loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
// import '../data/backend-practice.js';
//import '../data/cart-class.js';

async function loadPage() {
  await loadProductsFetch();

  await new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  });
  
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

// Promise.all([
//   loadProductsFetch(),

// ]).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// })