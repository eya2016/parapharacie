import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as authActions from '../../../store/actions/authActions';
import './style.css';

import { connect } from 'react-redux';

class TopHeader extends Component{

    constructor(props) {
        super(props);
        this.state = {  

        };
      }
    
    handleChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    componentDidMount() {
        this.props.getToken();
    }


    render() {

        let guestAccount = <ul className="Dropdown Account">
                                <li><Link to="/signup"><i className="fas fa-user"></i>&nbsp;&nbsp;<span>S'enregister</span></Link></li>
                                <li><Link to="/login"><i className="fas fa-user"></i>&nbsp;&nbsp;<span>Login</span></Link></li>
                            </ul>;
        if(this.props.auth.isAuthenticated){
            guestAccount = <ul className="Dropdown Account">
                                <li><Link to="/orders"><i className="far fa-clipboard"></i>&nbsp;&nbsp;<span>Commandes</span></Link></li>
                                <li><Link to="" onClick={() => this.props.logout()}><i className="fas fa-sign-out-alt"></i>&nbsp;&nbsp;<span>Déconnexion</span></Link></li>
                            </ul>;
        }

        return (
            <div className="TopHeader">
                <div className="Top">     
                    <div className="SocialMediaIcons">
                        <a href="mailto:mypara-pharmacie@gmail.com" target='_blank' rel="noopener noreferrer">
                            <i className="fa fa-envelope-o"></i> mypara-pharmacie@gmail.com
                        </a>
                        <span> <i className='fa fa-phone'></i> 55 982 431</span>
                    
                    </div>
                    <ul className="TopMenu">
                        {/* <li className="MainHeader"> 
                            <div className="SearchOption">
                                l Categories</option>
                                </select> */}
                                {/* <input type="text" onChange={this.handleChange} />
                                <button>
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </li> */} 
                        <li className="MenuItem">
                            <Link to="/account" style={{marginRight:'35px'}}>{this.props.auth.isAuthenticated ? this.props.auth.user.firstName: 'Connexion'}</Link>
                            {guestAccount}
                        </li>
                    </ul>
                </div>
            </div>
        
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth,
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getToken: () => dispatch(authActions.getToken())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopHeader);