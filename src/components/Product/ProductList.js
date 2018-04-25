import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Table
} from 'reactstrap';
import { NavLink } from 'react-router-dom';


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.onDeleteProduct = this.onDeleteProduct.bind(this);
    }

    onDeleteProduct(id) {

    }

    render(){
        return(
            <Table responsive>
                <thead>
                <tr>
                    <th>No</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Qty</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {this.props.productStore.map((data, i) => {
                    return (<tr key={i}>
                        <td>{++i}</td>
                        <td>{data.product_name}</td>
                        <td>{data.product_price}</td>
                        <td>{data.qty}</td>
                        <td>
                            <NavLink className="btn btn-primary" to={`/product/item/edit/${data.id}`}>Edit</NavLink> &nbsp;
                            <button className="btn btn-danger" onClick={ () => onDeleteProduct(data.id)}> Delete</button>
                        </td>
                    </tr>)
                })}
                </tbody>
            </Table>
        )
    }
}

ProductList.propTypes = {
    productStore: PropTypes.array.isRequired
};

export default ProductList;
