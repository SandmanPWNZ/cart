import React, {Component} from 'react';
import './Cart.scss';
import {connect} from 'react-redux';

//modules
import {ProductItem} from './components/';
import {
    CartTotal,
    SkeletonLoader
} from './containers/';

import CartActions from './store/CartActions.js'


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartList: [],
            loading: true,
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
    }

    //lifecycle functions

    componentWillMount() {
        console.log(this.props);
        //todo add axios fetch products request here!
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                cartList: this.products,
                loading: false
            });
        }, 3000);

    }


    // lifecycle functions end
    products = [
        {
            "id": "1",
            "createdAt": 1547939426,
            "name": "Product 1",
            "imageUrl": "https://picsum.photos/400/400?image=1",
            "description": "Simple description for product №1",
            "price": 35,
            "quantity": 5
        },
        {
            "id": "2",
            "createdAt": 1547939366,
            "name": "Product 2",
            "imageUrl": "https://picsum.photos/400/400?image=2",
            "description": "Simple description for product №2",
            "price": 71,
            "quantity": 5
        },
        {
            "id": "3",
            "createdAt": 1547939306,
            "name": "Product 3",
            "imageUrl": "https://picsum.photos/400/400?image=3",
            "description": "Simple description for product №3",
            "price": 57,
            "quantity": 5
        },
        {
            "id": "4",
            "createdAt": 1547939246,
            "name": "Product 4",
            "imageUrl": "https://picsum.photos/400/400?image=4",
            "description": "Simple description for product №4",
            "price": 72,
            "quantity": 5
        },
        {
            "id": "5",
            "createdAt": 1547939186,
            "name": "Product 5",
            "imageUrl": "https://picsum.photos/400/400?image=5",
            "description": "Simple description for product №5",
            "price": 47,
            "quantity": 5
        },
        {
            "id": "6",
            "createdAt": 1547939126,
            "name": "Product 6",
            "imageUrl": "https://picsum.photos/400/400?image=6",
            "description": "Simple description for product №6",
            "price": 39,
            "quantity": 5
        },
        {
            "id": "7",
            "createdAt": 1547939066,
            "name": "Product 7",
            "imageUrl": "https://picsum.photos/400/400?image=7",
            "description": "Simple description for product №7",
            "price": 27,
            "quantity": 5
        },
        {
            "id": "8",
            "createdAt": 1547939006,
            "name": "Product 8",
            "imageUrl": "https://picsum.photos/400/400?image=8",
            "description": "Simple description for product №8",
            "price": 12,
            "quantity": 5
        },
        {
            "id": "9",
            "createdAt": 1547938946,
            "name": "Product 9",
            "imageUrl": "https://picsum.photos/400/400?image=9",
            "description": "Simple description for product №9",
            "price": 24,
            "quantity": 5
        },
        {
            "id": "10",
            "createdAt": 1547938886,
            "name": "Product 10",
            "imageUrl": "https://picsum.photos/400/400?image=10",
            "description": "Simple description for product №10",
            "price": 48,
            "quantity": 5
        }
    ];

    changeQuantity(index, action) {
        let quantity = this.products[index].quantity;
        this.products[index].quantity =
            action === 'plus' ? (
                quantity + 1
            ) : (
                quantity - 1
            );

        this.setState({
            cartList: this.products
        });
    }

    deleteItem(index) {
        this.products = this.products.filter((el, i) => {
            return index !== i;
        });

        this.setState({
            cartList: this.products
        });
    }


    render() {
        console.log(this.props);
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
                <div className={'cart-checkout'}>
                    <CartTotal products={this.state.cartList}/>
                    <button className={'btn'} disabled={this.state.cartList.length === 0}>Buy</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({products}) {
    return {products}
}

export default connect(mapStateToProps, CartActions)(Cart);