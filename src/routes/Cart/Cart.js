import React, {Component} from 'react';
import './Cart.scss';
import {connect} from 'react-redux';

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
            loading: true
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
    }

    //lifecycle functions
    componentDidMount() {
        this.props.fetchProducts();
    }

    componentWillReceiveProps(props) {
        this.setState({
            cartList: props.products,
            loading: false
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
                        <button className={'btn'} disabled={this.state.cartList.length === 0}>Buy</button>
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