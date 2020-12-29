var full_price = 0;
shopCart = [{ name: 'Product1', price: 6999 }, { name: 'Product2', price: 11000 }, { name: 'Product3', price: 4500 }, { name: 'Product4', price: 8000 }];
function countBasketPrice(x) {
    for (i = 0; i < shopCart.length; i++) {
        full_price = full_price + shopCart[i].price;
    }
    return full_price;
}
document.write('<h3>Your shopping cart:</h3>');
for (i = 0; i < shopCart.length; i++) { document.write(shopCart[i].name + ': ' + shopCart[i].price + ' ₽</br>'); }
document.write('</br><strong>Order value: ' + countBasketPrice(shopCart) + '</strong>');