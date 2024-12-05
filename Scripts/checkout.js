import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./Checkout/orderSummary.js";
import { renderPaymentSummary } from "./Checkout/paymentSummary.js";
// import '../data/backend-practicw.js'
//import '../data/cart-class.js'

loadProducts(() => {
  renderOrderSummary();
  renderPaymentSummary();
});
