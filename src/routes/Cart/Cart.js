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
            cartList: this.props.products,
            loading: true,
            showError: false,
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.closeNotifier = this.closeNotifier.bind(this);
    }

    //lifecycle functions
    componentWillMount() {
        this.props.fetchProducts();
    }

    componentWillReceiveProps(props) {
        if (props.error) {
            this.setState(state => {
                state.showError = !state.showError;
            })
        }
        this.setState(state => {
            state.cartList = props.products;
            state.loading = false;
        });
    }

    // component functions
    changeQuantity(index, action) {
        let products = this.state.cartList,
            quantity = this.state.cartList[index].quantity;
        products[index].quantity =
            action === 'plus' ? (
                quantity + 1
            ) : (
                quantity - 1
            );

        this.setState({
            cartList: products
        });
    }

    deleteItem(index) {
        let products = this.state.cartList,
            newProducts = products.filter((el, i) => {
                return index !== i;
            });

        this.setState({
            cartList: newProducts
        });
    }

    closeNotifier() {
        this.setState(state=>{
            state.showError = !state.showError;
        });
    }


    render() {
        return (
            <div className={'wrapper'}>
                {
                    this.state.loading === true ? (
                        <SkeletonLoader/>
                    ) : (
                        <ul className={'products-list'}>
                            {
                                this.state.cartList.length === 0 ? (
                                    <div className={'cart-empty'}>We are very unpleased to tell you that your cart is
                                        empty!</div>
                                ) : (
                                    this.state.cartList.map((product, index) => {
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
                    )
                }
                {
                    this.state.cartList.length === 0 ||
                    <div className={'cart-checkout'}>
                        <CartTotal onChange={this.props.totalChanged} products={this.state.cartList}/>
                        <NavLink to={'/checkout'} className={'btn'}
                                 disabled={this.state.cartList.length === 0}>Buy</NavLink>
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