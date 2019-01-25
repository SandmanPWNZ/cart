import React, {Component} from 'react';
import './Cart.scss';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";

//modules
import {ProductItem} from './components/';
import {
    CartTotal,
    SkeletonLoader
} from './containers/';

import * as CartActions from './store/CartActions.js'


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            showError: false,
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.closeNotifier = this.closeNotifier.bind(this);
    }

    //lifecycle functions
    componentDidMount() {
        this.props.fetchProducts();
    }

    // shouldComponentUpdate(nextProps, nextState, nextContext) {
    //     // debugger
    //     if(this.props.products && this.props.products.length !== nextProps.products.length){
    //         debugger
    //         return true
    //     }
    //     return true
    // }

    // component functions
    changeQuantity(index, quantity) {
        // let products = this.state.cartList;
        // products[index].quantity = quantity;
        //
        // this.setState({
        //     cartList: products
        // });
        this.props.quantityChanged(index, quantity);
    }

    deleteItem(index) {
        // let products = this.state.cartList,
        //     newProducts = products.filter((el, i) => {
        //         return index !== i;
        //     });
        //
        // this.setState({
        //     cartList: newProducts
        // });
        this.props.productRemoved(index);
    }

    closeNotifier() {
        this.setState(state => {
            state.showError = !state.showError;
        });
    }


    render() {
        if (!this.props.products) {
            return (
                <div className={'wrapper'}>
                    <SkeletonLoader/>
                </div>
            )
        }
        const {products} = this.props;

        return (
            <div className={'wrapper'}>
                <ul className={'products-list'}>
                    {
                        products.length === 0 ? (
                            <div className={'cart-empty'}>We are very unpleased to tell you that your cart is
                                empty!</div>
                        ) : (
                            products.map((product, index) => {
                                return <ProductItem
                                    key={index}
                                    product={product}
                                    index={index}
                                    onQuantityChange={this.changeQuantity}
                                    onDelete={this.deleteItem}
                                />
                            })
                        )
                    }
                </ul>
                {
                    products.length === 0 ||
                    <div className={'cart-checkout'}>
                        <CartTotal onChange={this.props.totalChanged} products={products}/>
                        <NavLink to={'/checkout'} className={'btn'}
                                 disabled={products.length === 0}>Buy</NavLink>
                    </div>
                }
                {
                    this.props.error &&
                    <div className={'error-notify shadowed'}>
                        <span onClick={this.closeNotifier}>Close</span>
                        <p>{this.props.errorMessage}</p>
                    </div>
                }
            </div>
        )
    }
}

function mapStateToProps({CartReducer}) {
    return CartReducer
}


export default connect(mapStateToProps, CartActions)(Cart);