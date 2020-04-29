import React from 'react';
import { Link } from 'react-router-dom';

import './style.css';

const Footer = () =>  {

    return (
       
        <footer className="footer" id='footer_id'>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <div className="footer-widget">
                <h3>Contact</h3>
                <div className="footer-widget-content">
                  <a href="mailto:mypara-pharmacie@gmail.com " className="contact-link">mypara-pharmacie@gmail.com </a>
                  <a href="mailto:support@gmail.com" className="contact-link red"> support@gmail.com </a>
                  <a href="tel:0121234" className="contact-link">(+216) 55 982 431</a>
                  <br/><br/><br/>
                  <div className="footer-social">
                        <ul>
                            <li><a href="https://www.facebook.com/pharmaciedurondpointfortdefrance/" target='_blanc'><i className="fab fa-facebook-f fa-2x"></i></a></li>
                            <li><a href="https://www.instagram.com/pharmacie_fortdefrance/" target='_blanc'><i className="fab fa-instagram fa-2x"></i></a></li>
                            <li><a href="https://www.youtube.com/watch?v=e8iMNtG7ji8" target='_blanc'><i className="fab fa-youtube fa-2x"></i></a></li>
                            <li><a href="https://www.google.com/maps/place/Pharmacie+Du+Lac/@36.8353515,10.2334486,16z/data=!4m8!1m2!2m1!1slac1,+tunis+pharacie!3m4!1s0x0:0xc04cefe49afef92!8m2!3d36.8331211!4d10.2374795"  target="_blanc" className="contact-icon"><i className="fas fa-map-marker-alt fab fa-2x"></i></a></li>   
                        </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
            <div className="footer-widget">
              <h3>News</h3>
              <div className="footer-widget-content">
                <div className="media">
                    <div className="media-left">
                       <a href="http://localhost:3001/blog"><img className="media-object" src="https://www.pharma-medicaments.com/media/pharmamedicamentsbloggingembre__011133000_1025_05072018.jpg" alt="..." width='65' height='65' /></a>
                    </div>
                    <div className="media-body">
                       <p><a href="http://localhost:3001/blog" className='postNews'>LE GINGEMBRE, UNIQUEMENT APHRODISIAQUE ? </a></p>
                      
                    </div>
                 </div>
                <div className="media">
                    <div className="media-left">
                       <a href="http://localhost:3001/blog"><img className="media-object" src="https://www.pharma-medicaments.com/media/pharmamedicamentsbloglait__032131400_1452_22012018.jpg" alt="..." width='65' height='65' /></a>
                    </div>
                    <div className="media-body">
                       <p><a href="http://localhost:3001/blog" className='postNews'>MICHEL EDOUARD, LA FIN DU VENGEUR MASQUÉ </a></p>
                    </div>
                 </div>
              </div>
              </div>
            </div>
            <div className="col-sm-3">
            <div className="footer-widget">
              <h3>Horraires d'ouverture</h3>
              <div className="footer-widget-content">
              <div className="open-time ">
                <ul className="opening-time">
                  <li><span><i className="fa fa-times"></i></span><p className="clock-time"><strong>Lundi :</strong> fermé</p>
                   </li>
                  <li><span><i className="fa fa-check"></i></span><p><strong>Mar-Vend :</strong> 8:00 - 12:00</p></li>
                  <li><span><i className="fa fa-check"></i></span><p><strong>Sam-Dim  :</strong> 7:00 - 13:00</p></li>
                  <li><span><i className="fa fa-check"></i></span><p><strong>Vacances :</strong> 00:00-12:00</p></li>
                </ul>
                 </div>
              </div>
              </div></div>
            
            <div className="col-sm-3">
            <div className="footer-widget">
              <h3>Nos promotions</h3>
              <div className="footer-widget-content">
                <div className="images-gellary">
                  <ul>
                    <li><a href="https://www.instagram.com/p/B4pfrZkjeD8/" target='_blanc'><img src="https://instagram.ftun1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/72663658_153471256048219_7915351076930783394_n.jpg?_nc_ht=instagram.ftun1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=HvwbUlbz-FwAX9BG3WH&oh=dc29d2ec7f779837d647efd762de3917&oe=5ECEBDEC" width='85' height='85' alt="Instagram 01"/></a></li>
                    <li><a href="https://www.instagram.com/p/BrmQWGfnn80/" target='_blanc'><img src="https://instagram.ftun1-1.fna.fbcdn.net/v/t51.2885-15/e35/47344352_349555959167046_4423260844333726326_n.jpg?_nc_ht=instagram.ftun1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=WoI3vMlbw9QAX-3dbHY&oh=ef4a057fcdd3b89ddd8711b4e7793780&oe=5EC23074" width='85' height='85' alt="Instagram 02"/></a></li>
                    <li><a href="https://www.instagram.com/p/BrVuEMSnwv4/" target='_blanc'><img src="https://instagram.ftun1-1.fna.fbcdn.net/v/t51.2885-15/e35/46078278_582331948856210_3465776726533261758_n.jpg?_nc_ht=instagram.ftun1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DwHeLk7OiQ4AX-4Yj2J&oh=29e8810e9bdb730ba14dc5f916053e1c&oe=5EB8942D" width='85' height='85' alt="Instagram 03"/></a></li>
                    <li><a href="https://www.instagram.com/p/BcZm7Oxl3CB/" target="_blanc"><img src="https://instagram.ftun1-1.fna.fbcdn.net/v/t51.2885-15/e35/25006816_396870500746963_496045851987148800_n.jpg?_nc_ht=instagram.ftun1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=tbwnR_BpKWEAX8aCN2p&oh=c93a53170ce4ba4787156e9efc09fa7f&oe=5ED9CAF3" width='85' height='85' alt="Instagram 04"/></a></li>
                    <li><a href="https://www.instagram.com/p/BrVtfXOHL3G/" target='_blanc'><img src="https://instagram.ftun1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/47025854_152273565740148_9108496510261756139_n.jpg?_nc_ht=instagram.ftun1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=AskC0jL-FaEAX9nqFeN&oh=8ca3f9892f237b067fa60b1ac632b0b1&oe=5ECA1F94" width='85' height='85' alt="Instagram 05"/></a></li>
                    <li><a href="https://www.instagram.com/p/BpjFXkzHKo9/" target='_blanc'><img src="https://instagram.ftun1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/46546861_385811202162874_5994504340428872944_n.jpg?_nc_ht=instagram.ftun1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=qntiyZFLAc0AX-I31Ib&oh=37b6b24b8861a8914ebf9f2c0401ef97&oe=5ECAE91E" width='85' height='85' alt="Instagram 06"/></a></li>
                  </ul>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-rights" >
            <p>©2001–2019 All rights reserved. <a href="#">Privacy</a> and <a href="#">Terms</a>.</p>
        </div>
      </footer>
        )   
}

export default Footer;