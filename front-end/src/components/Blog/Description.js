import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import { IMAGES } from './data';
import './style.css';
import '../Footer/style.css'



const  Description = (props) => {


      return (
         <div style={{marginTop:'90px',}}>
            { 
              IMAGES.map( (e,i)=>
                    i===Number(props.match.params.id) &&
                    <div class='post-description'  key={i} style={{marginTop:'50px'}}>
                        <h2>{e.title}</h2><br/><br/>
                        <div className='desc-container'>
                            <img src={e.postImage} alt="." width="500" height="500"/> 
                            <span style={{margin: '30px 55px'}}>{e.postContent}</span>
                        </div>
                    </div> 
                ) 
            }      
      </div>
      )
  
}

export default Description;