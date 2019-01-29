import React, {Component} from 'react';
import {CheckoutForm} from "./components";

import Loading from "../../containers/Loading";

class Checkout extends Component {

    render() {
        return (
            <div>
                {
                    this.props.total ?
                        <div className={'wrapper'}>
                            <CheckoutForm prodcuts={this.props.products} total={this.props.total}/>
                        </div>
                        : <Loading/>
                }
            </div>
        );
    }
}

export default Checkout;