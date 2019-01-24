import React from 'react';

const FormField = ({
                       divClass,
                       input,
                       label,
                       type,
                       meta: {touched, error, warning},
                       required,
                       children
                   }) => {
        // if (type === 'select') {
        //     debugger
        // }
        function handleSelectChange(event) {
            debugger
        }

        return (
            <div className={divClass}>
                <label>
                    {label}{required && '*'}
                </label>
                <div className={'input'}>
                    {
                        type === 'select' ? (
                            <select onChange={(event) => handleSelectChange(event)} {...input}
                                    className={(touched && error ? 'error' : undefined)}>
                                {children}
                            </select>
                        ) : (

                            <input {...input} className={(touched && error ? 'error' : undefined)}
                                   placeholder={label} type={type}/>
                        )
                    }
                    {touched &&
                    ((error && <span className={'error'}>{error}</span>) ||
                        (warning && <span className={'warning'}>{warning}</span>))
                    }
                </div>
            </div>
        )
    }
;

export default FormField;