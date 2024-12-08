import { loadProducts, loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
// import '../data/backend-practice.js';
//import '../data/cart-class.js';

async function loadPage() {
  try{
    // throw 'error1';
    
    await loadProductsFetch();
  } catch(error) {
    console.log('unexpected error. Please try again later');
  }
  
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