import { loadProducts, loadProductsFetch } from "../data/products.js";
import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";

async function loadPage() {
  try{
    await loadProductsFetch();
  } catch(error) {
    console.log('unexpected error. Please try again later');
  }
  
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();

