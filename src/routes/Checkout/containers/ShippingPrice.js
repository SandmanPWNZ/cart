import React from 'react';

const ShippingPrice = ({total, amount}) => {
    let shippingPrice = amount >= 3 || total >= 200 ? 'Free Shipping' : 0;
    if (shippingPrice === 0) {

    }
    return (

        <div>{typeof shippingPrice === 'number' ? shippingPrice.toFixed(2) + '&#8364;' : shippingPrice} </div>
    )
};

export default ShippingPrice;