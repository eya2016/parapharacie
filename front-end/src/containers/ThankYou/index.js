import React, { Component } from 'react';
// import Header from '../../components/Header/Header';
// import Footer from '../../components/Footer/Footer';
import './style.css';

class ThankYou extends Component{

    render() {

        const queryParams = this.props.location.search.split("?")[1];
        const orderId = queryParams.split("=")[1];

        return (
            <div>
                {/* <Header /> */}
                <div className="Content">
                    <div className="ThankyouPage" style={{marginTop:'90px'}}>
                       <h1>Nous vous remercions de votre commande</h1>
                       <p className="OrderId">Le Numéro de la commande est: {orderId.toLocaleUpperCase()}</p>
                       <p className="SmallText">Vous recevrez un e-mail de confirmation dans votre boite email</p>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        );
    }

}

export default ThankYou;