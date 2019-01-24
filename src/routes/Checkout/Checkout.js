import React, {Component} from 'react';
import {CheckoutForm} from "./components";

import store from '../../store';

class Checkout extends Component {
    componentDidMount() {
        this.setState({
            total: store.getState().CartReducer.total
        })
    }

    render() {
        return (
            <div className={'wrapper'}>
                <CheckoutForm  total={this.state.total}/>
            </div>
        );
    }
}

export default Checkout;