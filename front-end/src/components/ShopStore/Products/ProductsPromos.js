import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as productActions from '../../../store/actions/productActions';
import { connect } from 'react-redux';
import './style.css';
import Product from './Product';

class ProductsPromos extends Component{

    state = {
        slug: 'Products',
        productsPromo : []
    }

    componentDidMount() {
        const slug = '';
        console.log("catch slug ",slug);
         this.getProducts(slug);
        
    }

    getProducts = (categorySlug = '', filter = null) => {
       
        this.props.getProducts(categorySlug, filter)
        .then(response => {

            console.log('\n ************************************* \n',response.message);

            this.setState({
                productsPromo: response.message.filter(e => e.offer !== 0 )
            })
            console.log('\n ************************************* \n',response.message);
        });
    }

 

    applyFilter = (filter) => {
        const slug = '';
        this.getProducts(slug, filter);
    }

    categoryTree(categories){
        var categoriesAr = [];
        for(var value of categories){

            categoriesAr.push(
                    <li key={value.slug}>
                        <Link to={`/products/${value.slug}`}>{value.name}</Link>
                        {value.children.length > 0 ? (<ul>{this.categoryTree(value.children)}</ul>) : null}
                    </li>
            );
        }

        return categoriesAr;
    }

    render() {
        
        const listePromotion = this.state.productsPromo;
        console.log(' la liste de promotion ==> \n ',listePromotion);
        return (

            <div className="containerPromo">
                <div className='row'>       
                {
                     this.state.productsPromo.map( product => <Product
                        key={product._id}
                        id={product._id}
                        name={product.name}
                        price={product.price}
                        productPic={product.productPic}
                        slug={product.slug}
                        />
                    )
                }
                </div> 
            </div>
            
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProducts: (categorySlug, filter) => dispatch(productActions.getProducts(categorySlug, filter)),
        getCategories: () => dispatch(productActions.getCategories()),
        getProductsPromos : () => dispatch(productActions.getProducts())
    }
}

const mapStateToProps = state => {
    return {
        products: state.products,
        productsPromo : state.productsPromo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPromos);