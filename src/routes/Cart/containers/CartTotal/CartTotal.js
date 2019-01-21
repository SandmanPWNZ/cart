import React from 'react';
import './CartTotal.scss';

const CartTotal = ({products}) => {
    let total = 0;
    products.forEach(el => {
        total += el.price * el.quantity;
    });
    return (
        <div className={'cart-total'}>
            {total.toFixed(2)} €
        </div>
    );
};

export default CartTotal;
