import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class CheckoutForm extends Component {
    render() {
        const {handleSubmit, reset} = this.props;

        const submit = (values) => console.log(values);

        return (
            <form onSubmit={handleSubmit(submit)}>
                <Field name="title" component="input" type="text"/>
                <Field name="text" component="input" type="text"/>
                <div>
                    <button type="button" onClick={reset}>Очистить форму</button>
                    <button type="submit">Отправить форму</button>
                </div>
            </form>
        );
    }
}

CheckoutForm = reduxForm({
    form: 'checkout',
})(CheckoutForm);

export default CheckoutForm;