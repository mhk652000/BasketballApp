import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import ScrollToTop from './components/ScrollToTop';
import Games from './pages/Games/Games';
import Subscribe from './pages/Subscribe/Subscribe.js';

function App({instance}) {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            {/* <Route path='/services' component={Services} /> */}
            <Route path='/products' component={Products} />
            {/* <Route path='/sign-up' component={SignUp} /> */}
            <Route path='/sign-up' render={(props) => <SignUp {...props} instance={instance} />} />
            <Route path='/games' component={Games} />
            <Route path='/subscribe' component={Subscribe} />
          </Switch>
          <Footer />
      </Router>
        
    
  );
}

export default App;
