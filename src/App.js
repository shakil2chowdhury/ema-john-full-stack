import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './store/StateProvider';
import Payment from './components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders/Orders';
import Footer from './components/Footer/Footer';

const promise = loadStripe('pk_test_51Igo45HcDYGipcrtc7qL0cWyVa03SXLETXDpb6DJU8fuJ4ZlPWl9cKGkUqLSyjrEk5HZMfDE3l8tYW7q88l8D7iX00dvQJ7hBB');

function App() {
  const [{}, dispatch] = useStateValue()
  useEffect(() => {
    //run once when all components load
    auth.onAuthStateChanged(authUser => {
      if(authUser){
        //logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header></Header>
            <Orders></Orders>
          </Route>
          <Route path="/payment">
            <Header></Header>
            <Elements stripe={promise}>
              <Payment></Payment>
            </Elements>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
