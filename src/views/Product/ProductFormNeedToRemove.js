/*
    Product Form
 */

import React, { Component } from 'react';
import {
    Container,
    CardHeader,
    Row,
    Col,
    Card,
    CardBody,
    CardFooter,
    Button,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Alert
} from 'reactstrap';

import { connect } from 'react-redux';
import { createProduct } from '../../action/productAction';

class ProductFormNeedToRemove extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product_name: '',
            product_price: '',
            qty: '',
            formStatus: null
        };
        this.onClickSubmit = this.onClickSubmit.bind(this);
        this.onProductNameChange = this.onProductNameChange.bind(this);
        this.onProductPriceChange = this.onProductPriceChange.bind(this);
        this.onProductQtyChange = this.onProductQtyChange.bind(this);
    }

    onClickSubmit() {
        const data = {
            product_name: this.state.product_name,
            product_price: this.state.product_price,
            qty: this.state.qty
        };

        const { dispatch } = this.props;
        return dispatch(createProduct(data)).then(status => {
            console.log("**", status);
            this.setState({
                formStatus: status
            });
        }).catch(err => {
            console.log("@@", err);
            this.setState({
                formStatus: false
            });
        })
    }

    onProductNameChange(event) {
        this.setState({
            product_name: event.target.value
        });
    }

    onProductPriceChange(event) {
        this.setState({
            product_price: event.target.value
        })
    }

    onProductQtyChange(event) {
        this.setState({
            qty: event.target.value
        })
    }

    render() {
        let alertForm = null;
        if(this.state.formStatus === 200) {
            alertForm = (<Alert color="success">
                Product has Created
            </Alert>);
        }else if(this.state.formStatus === false) {
            alertForm = (<Alert color="danger">
                Something Wrong !, Product Not Created
            </Alert>);
        }

        return(
            <div>
                <h1>Product</h1>
                <p className="text-muted">Add a New Product</p>
                <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-user"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" name="product_name" value={this.state.product_name} onChange={this.onProductNameChange} placeholder="Product Name"/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-user"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" name="product_price" value={this.state.product_price} onChange={this.onProductPriceChange} placeholder="Product Price"/>
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                            <i className="icon-user"></i>
                        </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" name="qty" value={this.state.qty} onChange={this.onProductQtyChange} placeholder="Qty "/>
                </InputGroup>
                <Button color="success" block onClick={this.onClickSubmit}>Submit</Button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        productStore: state.productState
    }
}

export default connect(mapStateToProps)(ProductFormNeedToRemove);

