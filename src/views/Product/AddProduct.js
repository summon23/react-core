/*
    Add Product Page
 */

import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody
} from 'reactstrap';

import { connect } from 'react-redux';
import ProductForm from '../../components/Product/ProductForm';
import { createProduct } from '../../action/productAction';

class AddProductPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // Do something
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("form submit");
        let formData = Object.assign({}, this.props.productForm.values);
        console.log(formData);

        this.props.onCreateProduct(formData).then(status => {
            console.log("**", status);
            this.setState({formStatus: 'success'});
        }).catch(err => {
            console.log("$$", err);
            this.setState({formStatus: 'error'});
        })
    }

    render() {
        return (
            <Row>
                <Col xs="6" lg="6">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Product > Add Product
                        </CardHeader>
                        <CardBody>
                            <ProductForm onSubmit={this.handleSubmit} formStatus={this.state.formStatus}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state) {
    return {
        productForm: state.form.productForm
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onCreateProduct: (data) => dispatch(createProduct(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductPage);

