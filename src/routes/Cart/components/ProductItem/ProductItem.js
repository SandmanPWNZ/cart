import React, {Component} from 'react';

import './ProductItem.scss';
import trash from './trash.png';

class ProductItem extends Component {
    constructor(props) {
        super(props);

        this.handleQuantity = this.handleQuantity.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    };

    handleQuantity(index, action) {
        this.props.onQuantityChange(index, action);
    };

    deleteItem(index) {
        this.props.onDelete(index);
    };

    render() {
        let product = this.props.product;
        let itemIndex = this.props.index;
        let productImageStyle = {
            backgroundImage: 'url(' + product.imageUrl + ')'
        };
        return (
            <li>
                <div className={'product-image'} style={productImageStyle}>
                </div>
                <div className={'product-info'}>
                    <p className={'product-name'}>{product.name}</p>
                    <p className={'product-description'}>{product.description}</p>
                </div>
                <div className={'product-control'}>
                    <div className={'product-trash'}>
                        <button onClick={() => this.deleteItem(itemIndex)}>
                            <img src={trash} alt="trash icon"/>
                        </button>
                    </div>
                    <div className={'product-price-quantity'}>
                        <div className={'product-quantity'}>
                            <button disabled={product.quantity === 0}
                                    onClick={() => this.handleQuantity(itemIndex, 'minus')}>-
                            </button>
                            <input type="text" disabled={true} value={product.quantity}/>
                            <button disabled={product.quantity === 100}
                                    onClick={() => this.handleQuantity(itemIndex, 'plus')}>+
                            </button>
                        </div>
                        <span
                            className={'product-price'}>{`${(product.price * product.quantity).toFixed(2)} €`}</span>
                    </div>
                </div>
            </li>
        );
    }
}

export default ProductItem;