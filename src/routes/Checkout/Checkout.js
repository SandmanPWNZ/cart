import React, {Component} from 'react';
import {CheckoutForm} from "./components";

class Checkout extends Component {
    render() {
        return (
            <div className={'wrapper'}>
                <CheckoutForm />
            </div>
        );
    }
}

export default Checkout;