import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Product = props => {

    const url = props.match.url === '/' ? '/products/all' : props.match.url;
    console.log('chaine ==>  ', `${url}/${props.slug}`);
    return (
        <Link to={`${url}/${props.slug}`}>
            <div className="Product">
                <div className="ProductImage">
                    <img alt="" src={props.productPic[0].img} />
                </div>
                <div className="ProductDetails">
                    <p> <strong> {props.name} </strong></p>
                    <p><strong>{props.price} DT  </strong></p>
                </div>
            </div>
        </Link>
    );
}

export default withRouter(Product);