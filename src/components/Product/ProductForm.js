import React from 'react';
import '../../styles/App.css';
import { Field, reduxForm } from 'redux-form';
import { NavLink } from 'react-router-dom';

const validateNotEmpty = value => !value ? 'Must enter a value' : null

const renderField = ({
     input,
     label,
     type,
     id,
     meta: {touched, error}
     }) => (
    // Render schema for checkbox
    (type === 'checkbox') ?
        <div className="checkbox">
            <label>
                <input {...input} type={type}/>
                {label}
            </label>
            {touched &&
            (error &&
                <span className="error-text">
            {error}
          </span>)}
        </div>
    : // Render schema for inputs
        <div className="form-group">
            <label htmlFor={id}>
                {label}
            </label>
            <input {...input} id={id} type={type} className="form-control"/>
            {touched &&
            (error &&
                <span className="error-text">
            {error}
          </span>)}
        </div>
);

const ProductForm  = ({onSubmit, formStatus}) => {
    return(
        <div>
            {formStatus === 'success' &&
            <p className="alert alert-success">
                Product successfully saved.
                <NavLink to="/product/list"> Return to Product list</NavLink>
            </p>}
            {formStatus === 'error' &&
            <p className="alert alert-danger">Saving Product failed. Please fill in all the fields.</p>}

            <form onSubmit={onSubmit} noValidate>
                <Field name="product_name" component={renderField} type="text"
                       id="product-name" label="Product Name" validate={validateNotEmpty}/>
                <Field name="product_price" component={renderField} type="text"
                       id="product-price" label="Product Price" validate={validateNotEmpty}/>
                <Field name="qty" component={renderField} type="url"
                       id="product-qty" label="Product Qty" validate={validateNotEmpty}/>
                <button type="submit" className="btn btn-primary merchant-submit" >Submit</button>
            </form>
        </div>
    )
};

export default reduxForm({
    form: 'productForm',
    enableReinitialize: true
})(ProductForm);
