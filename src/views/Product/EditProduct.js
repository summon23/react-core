/*
    Edit Product Page
 */

import React, { Component } from 'react';
import {
    CardHeader,
    Row,
    Col,
    Card,
    CardBody
} from 'reactstrap';

import { connect } from 'react-redux';
import { updateProduct } from '../../action/productAction';
import ProductForm from '../../components/Product/ProductForm';

class EditProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("form Submit");
        let formData = Object.assign({}, this.props.productForm.values);
        const formId = this.props.currentProduct.id;
        this.props.onUpdateProduct(formId, formData).then(status => {
            console.log("**", status);
            this.setState({formStatus: 'success'});
        }).catch(err => {
            console.log("$$", err);
            this.setState({formStatus: 'error'});
        })
    }

    render() {
        return(
            <Row>
                <Col xs="6" lg="6">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Product > Edit Product
                        </CardHeader>
                        <CardBody>
                            <ProductForm onSubmit={this.handleSubmit} formStatus={this.state.formStatus} initialValues={this.props.currentProduct}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

function findCurrentProduct(products, id) {
    // Find the Selected Product
    return products.find(products => {
       return parseInt(products.id, 10) === parseInt(id, 10);
    });
}

function mapStateToProps(state, ownProps) {
    let currentProduct = state.productState.length ? findCurrentProduct(state.productState, ownProps.match.params.id) : null;
    return {
        productForm: state.form.productForm,
        currentProduct,
        productStore: state.productState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onUpdateProduct: (id, data) => dispatch(updateProduct(id, data))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(EditProductPage);

