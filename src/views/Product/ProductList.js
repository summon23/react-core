/*
 Product List
 */

import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button
} from 'reactstrap';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import ProductList from '../../components/Product/ProductList';
import { loadProduct } from '../../action/productAction';

class ProductListPage extends Component {
    constructor(props){
        super(props);
        this.onClickaddNewProduct = this.onClickaddNewProduct.bind(this);
    }

    componentDidMount(){
        this.props.onLoadProduct();
    }

    onClickaddNewProduct() {
    }

    render() {
        return(
            <Row>
                <Col xs="12" lg="12">
                    <Card>
                        <CardHeader>
                            <i className="fa fa-align-justify"></i> Product
                        </CardHeader>
                        <CardBody>
                            <Link to="/product/add">
                                <Button color="primary"> Add a Product</Button>
                            </Link>

                            <div className="separator">&nbsp;</div>
                            <ProductList productStore={this.props.productStore}/>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps(state) {
    return {
        productStore: state.productState
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onLoadProduct: function() {
            dispatch(loadProduct());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
