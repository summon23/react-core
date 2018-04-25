import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import Product from '../../views/Product/ProductList';
import AddProduct from '../../views/Product/AddProduct';
import EditProduct from '../../views/Product/EditProduct';
import Login from '../../views/Login/Login';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/product/list" name="Product List" component={Product}/>
                <Route path="/product/add" name="Add a Product" component={AddProduct}/>
                <Route path="/product/item/edit/:id" name="Edit Product" component={EditProduct}/>
                <Route path="/login" name="Login" component={Login}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
