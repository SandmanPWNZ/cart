import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

import './CheckoutForm.scss';

import {required, minLen3, email, exactLen9, num} from '../../../utils/FormValidate'
import FormField from '../../../containers/FormField';

class CheckoutForm extends Component {
    render() {
        const {handleSubmit, pristine, submitting, invalid} = this.props;

        const submit = (values) => console.log(values);

        return (
            <form onSubmit={handleSubmit(submit)}>
                <Field id="shippingName"
                       name="shippingName"
                       divClass={'row'}
                       label={'Name'}
                       required={true}
                       component={FormField}
                       validate={[required, minLen3]}
                       type="text"/>
                <Field id="shippingAddress"
                       name="shippingAddress"
                       divClass={'row'}
                       label={'Address'}
                       required={true}
                       component={FormField}
                       validate={required}
                       type="text"/>
                <Field id="shippingPhone"
                       name="shippingPhone"
                       divClass={'row'}
                       label={'Phone'}
                       required={true}
                       component={FormField}
                       validate={[num, exactLen9]}
                       type="text"/>
                <Field id="shippingEmail"
                       name="shippingEmail"
                       divClass={'row'}
                       label={'E-mail'}
                       required={true}
                       component={FormField}
                       validate={[required, email]}
                       type="text"/>
                <Field id="shippingOptions"
                       divClass={'row'}
                       label={'Shipping options'}
                       name="shippingOptions"
                       component={FormField}
                       type="select">
                    <option value="ninjPost">ninjPost</option>
                    <option value="D7L">D7L</option>
                    <option value="7post">7post</option>
                </Field>
                <div className="shippingPrice">
                    {

                    }
                </div>
                <div className="row checkout">
                    <button className={'btn'} disabled={invalid || pristine || submitting} type="submit">PAY</button>
                </div>
            </form>
        );
    }
}

CheckoutForm = reduxForm({
    form: 'checkout',
})(CheckoutForm);

export default CheckoutForm;