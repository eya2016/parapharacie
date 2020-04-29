import React from 'react';
import './style.css';
import { connect } from 'react-redux';

const CartPrice = props => {

    return (
        <div className="PriceWrapper">
            {/* show price */}
            <div className="CardTitle">
                <h3>DÉTAILS DE PRIX</h3>
            </div>
            <div className="CardBody">
                <div className="FinalBilling">
                    <div className="Row">
                        <p>Prix ({props.cart.cartCount})</p>
                        <p>{props.cart.totalAmount} DT</p>
                    </div>
                    <div className="Row">
                        <p>Livraison</p>
                        <p>0 DT</p>
                    </div>
                    <hr />
                    <div className="Row">
                        <h4>Total à payer</h4>
                        <h4>{props.cart.totalAmount} DT</h4>
                    </div>
                </div>
                
            </div>
        </div>
    );


}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartPrice);