import React, { Component } from 'react';
import NormalInput from '../../../components/UI/NormalInput';


const AddressForm = props =>  {

        const {address} = props;
     

        return (
            <form onSubmit={props.addressSubmitHandler}>
                 <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="fullName"
                                value={address.fullName}
                                placeholder={'Nom Prénom'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="mobileNumber"
                                value={address.mobileNumber}
                                placeholder={'Numéro de Tel'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="pinCode"
                                value={address.pinCode}
                                placeholder={'Code Postale'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="locality"
                                value={address.locality}
                                placeholder={'Position'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                    </div>
    
                    <div className="Row">
                        <NormalInput 
                                name="address"
                                value={address.address}
                                placeholder={'Addresse'}
                                inputHandler={props.inputHandler}
                                type="textarea"
                                style={{height: '60px'}}
                        />
                    </div>
    
                    <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="cityDistrictTown"
                                value={address.cityDistrictTown}
                                placeholder={'Cité/Ville'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="state"
                                value={address.state}
                                placeholder={'Pays'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                    </div>
    
                    <div className="Row">
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="landmark"
                                value={address.landmark}
                                placeholder={'Repère (Optional)'}
                                inputHandler={props.inputHandler}
                                type="text"
                            />
                        </div>
                        <div style={{width: '49%'}}>
                            <NormalInput 
                                name="alternatePhoneNumber"
                                value={address.alternateNumber}
                                placeholder={'Autre numéro de téléphone (Optional)'}
                                inputHandler={props.inputHandler}
                                type="text"

                            />
                        </div>
                    </div>

                    <div className="Row">
                        <button className="DeliveryAddressButton">LIVRER LA COMMANDE</button>
                    </div>

            </form>
           
        );
    
    
}

export default AddressForm;