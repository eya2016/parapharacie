import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './style.css';


class Contact extends Component {

    render() {

        return (
            <div class="container contact-page">
   
            <div class="row" style={{height:'630px'}}>
                <div class="col-md-7 map">
                   
                     {/* <Map
                    google={this.props.google}
                    style={style}
                    initialCenter={{
                      lat: 36.8340958,
                      lng: 10.239141
                    }}
                    zoom={15}
                    onClick={this.onMapClicked}
                    >
    
                        <Marker onClick={this.onMarkerClick} name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
                    </Map>  */}
                </div> 
                <div class="col-md-5 adresseP" >
                            <ul class="contact-list">
                                <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">1053 Rue du Lac Biwa, Tunis</span></i></li>
                                
                                <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="(+216) 55 525 238" title="Give us a call">(+216) 55 525 238</a></span></i></li>
                                
                                <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:mypara-pharmacie@gmail.com" title="Send us an email">mypara-pharmacie@gmail.com </a></span></i></li>
                                
                            </ul>

                            <hr/>
                            <ul class="social-media-list"> 
                                <a href="https://www.google.com/maps/place/Pharmacie+Du+Lac/@36.8353515,10.2334486,16z/data=!4m8!1m2!2m1!1slac1,+tunis+pharacie!3m4!1s0x0:0xc04cefe49afef92!8m2!3d36.8331211!4d10.2374795"  target="_blanc" class="contact-icon">
                                    <li>
                                        <i class="fas fa-map-marker-alt fab fa-2x"></i>
                                    </li>
                                </a>
                                <a href="https://www.youtube.com/watch?v=e8iMNtG7ji8"  target='_blanc' class="contact-icon">
                                    <li>
                                        <i class="fab fa-youtube fa-2x"></i>
                                    </li>
                                </a>
                                <a href="https://www.instagram.com/pharmacie_fortdefrance/" target='_blanc' class="contact-icon">
                                    <li>
                                            <i class="fab fa-instagram fa-2x"></i> 
                                    </li>
                                </a>
                                <a href="https://www.facebook.com/pharmaciedurondpointfortdefrance/" target='_blanc' class="contact-icon">
                                    <li>
                                            <i class="fab fa-facebook-f fa-2x"></i>
                                    </li>
                                </a>
                            </ul>
                   
                
                </div>
        </div>
        </div>
        )
    }

}


export default Contact;
{/* export default GoogleApiWrapper({ apiKey: ('AIzaSyB8ymfhB9fMzoFhMY8lNcw_GLn-b98y6Lo') })(Contact); */}