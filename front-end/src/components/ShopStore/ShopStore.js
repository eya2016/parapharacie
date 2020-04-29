import React, { Component } from 'react';
import './style.css';
import Products from './Products/Products';
import { Route, Switch } from 'react-router-dom';
import Home from '../../containers/Home';
import { connect } from "react-redux";


class ShopStore extends Component{

    state={
        categoryTitle: 'Products'
    }

    render() {

        console.log('Parents');
        console.log('===> dans SHOP Component ==> ',this.props);

        return (
            <React.Fragment>
                
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/products" exact component={Products} />
                    <Route path="/products/:slug" component={Products} />
                </Switch>
                
            </React.Fragment>
            
        );
    }
}



export default connect(null, null)(ShopStore);