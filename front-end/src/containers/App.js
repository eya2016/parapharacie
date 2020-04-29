import React from 'react';
import { BrowserRouter as Router, Switch, Link, Route,  useHistory, useLocation, useParams } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import Shop from './Shop';
import Login from './Login';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import ControlPanel from './ControlPanel';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducers from '../store/reducers/authReducers';
import productReducers from '../store/reducers/productReducers';
import ProductDetails from './ProductDetails';
import Home from './Home';
import Blog from '../components/Blog/posts';
import Description from '../components/Blog/Description';
import Contact from '../components/Contact';
import Cart from './Cart';
import cartReducers from '../store/reducers/cartReducers';
import PlaceOrder from './PlaceOrder';
import ThankYou from './ThankYou';
import Orders from './Orders';
import { IMAGES } from '../components/Blog/data';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const rootReducers = combineReducers({
  auth: authReducers,
  products: productReducers,
  cart: cartReducers
});

const store = createStore(rootReducers, applyMiddleware(thunk));

window.store = store;

function App() {

  // let location = useLocation();
  // console.log(' \n ==> dans la fonction ModalSwitch \n : ', location);

  // // This piece of state is set when one of the
  // // gallery links is clicked. The `background` state
  // // is the location that we were at when one of
  // // the gallery links was clicked. If it's there,
  // // use it as the location for the <Switch> so
  // // we show the gallery in the background, behind
  // // the modal.
  // let background = location.state && location.state.background;
 
  return (

    <Provider store={store}>
  

      <Router>
      <Header/>
        <div className="App">
            
            <Switch>
            
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/forget-password" component={ForgetPassword} />
              <Route path="/cpanel" component={ControlPanel} />
              <Route path="/products/:category/:slug" component={ProductDetails} />
              <Route path="/products"  component={Shop} />
              <PrivateRoute path="/cart" component={Cart} />
              <PrivateRoute path="/place-order" component={PlaceOrder} />
              <PrivateRoute path="/thank-you" component={ThankYou} />
              <PrivateRoute path="/orders" component={Orders} />
              <Route  path="/"  component={Shop} />
              <Route path="/contact" component={Contact} />
              <Route path="/blog" component={Blog} />
              <Route path="/description/:id" component={Description} />
             
            </Switch>  
           

             {/* Show the modal when a background page is set */}
             <Route path="/description/:id" component={Description} /> 
        </div>
        <Footer/>
      </Router>

      
      
    </Provider>  
    
  );
}


export default App;
