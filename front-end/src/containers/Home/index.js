import React, { Component } from 'react';
import ProductsPromos from '../../components/ShopStore/Products/ProductsPromos';
import './style.css'

class Home extends Component{


    render() {
        return (
            <React.Fragment>
                <div className="container" style={{marginLeft:'90px'}}>
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        <div className="item active" >
                            <img src={require('./img/3.jpg')}  alt="Los Angeles" width="1096"  />
                        
                        </div>
                    </div>
                </div>               
                
                    <div class="container" style={{marginLeft:'90px'}}>
                         <div className='title'>
                            <h1>Des conseils de Pharmaciens experts, du Choix, des Prix!</h1>
                         </div>
		                 <div class="row" style={{margin:'0 auto'}}>
                            <div class="col-md-6 col-lg-4">
                                <div class="single-timeline mb-50 d-flex align-items-center">
                                    <div class="timeline-frame">
                                        <i class="fa fa-ambulance" aria-hidden="true"></i> 
                                        <br/>
                                    </div>
                                    <div class="timeline-content">
                                        <h4>Livraison à domicile</h4>
                                        <p>Votre commande livrée chez vous en service Colissimo.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="single-timeline mb-50 d-flex align-items-center">
                                    <div class="timeline-frame">
                                        <i class="fa fa-hospital-o" aria-hidden="true"></i> 
                                        <br/>
                                    </div>
                                    <div class="timeline-content">
                                        <h4>Retrait en pharmacie</h4>
                                        <p>Récupérez votre commande 1h après les avoir commandés</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="single-timeline mb-50 d-flex align-items-center">
                                    <div class="timeline-frame">
                                        <i class="fa fa-clock-o" aria-hidden="true"></i>
                                        <br/>
                                    </div>
                                    <div class="timeline-content">
                                        <h4>Horraire</h4>
                                        <p>Ouvert du lundi au samedi de 8h00 à 20h30</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                <div className='bestSeller'>
                    <h1>Promotions</h1>
                    <ProductsPromos />
                    
                </div>
            </React.Fragment>
        );
    }
}

export default Home;

