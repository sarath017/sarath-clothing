import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import SignInSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Checkout from './pages/checkout/checkout-page';

import Header from './components/header/header';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user-selector';

// Router

// history = Push
// match = url
// location = pathname(full URL)

// Router

class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route path="/signin" render={() => this.props.currentUser ? (<Redirect to ='/' />) : (<SignInSignUp />)} />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
