import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

import './CheckoutForm.scss';

import {required, minLen3, email, exactLen9} from '../../../utils/FormValidate'
import FormField from '../../../containers/FormField';

class CheckoutForm extends Component {
    render() {
        const {handleSubmit, pristine, reset, submitting, invalid } = this.props;

        const submit = (values) => console.log(values);

        return (
            <form onSubmit={handleSubmit(submit)}>
                <div className={'row'}>
                    <label htmlFor="shippingName">Name*</label>
                    <Field id="shippingName"
                           name="shippingName"
                           component={FormField}
                           validate={[required, minLen3]}
                           type="text"/>
                </div>
                <div className="row">
                    <label htmlFor="shippingAddress">Address*</label>
                    <Field id="shippingAddress"
                           name="shippingAddress"
                           component={FormField}
                           validate={required}
                           type="text"/>
                </div>
                <div className="row">
                    <label htmlFor="shippingPhone">Phone</label>
                    <Field id="shippingPhone"
                           name="shippingPhone"
                           component={FormField}
                           validate={exactLen9}
                           type="text"/>
                </div>
                <div className="row">
                    <label htmlFor="shippingEmail">E-mail</label>
                    <Field id="shippingEmail"
                           name="shippingEmail"
                           component={FormField}
                           validate={[required, email]}
                           type="text"/>
                </div>
                <div className="row">
                    <label htmlFor="email">Shipping options</label>
                    <Field id="shippingOptions"
                           name="shippingOptions"
                           component="select">
                        <option value="ninjPost">ninjPost</option>
                        <option value="D7L">D7L</option>
                        <option value="7post">7post</option>
                    </Field>
                </div>
                <div className="row checkout">
                    <button className={'btn'} disabled={invalid || pristine} type="submit">PAY</button>
                </div>
            </form>
        );
    }
}

CheckoutForm = reduxForm({
    form: 'checkout',
})(CheckoutForm);

export default CheckoutForm;