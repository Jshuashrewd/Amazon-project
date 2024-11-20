export const cart = [];

export function addToCart(productId){
  let marchingItem;

    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        marchingItem = cartItem;
      }
    });

    if (marchingItem) {
      marchingItem.quantity++;
    } else {
      cart.push({
      productId: productId,
      quantity: 1
    })
    }
}