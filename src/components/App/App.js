import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import QuatreCentQuatre from '../404/404';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
import Portfolio from '../Portfolio/Portfolio';
import AppProvider from './AppProvider';
import Cursor from './Cursor';

const App = () => (
    <Router>
        <AppProvider>
            {window.innerWidth > 768 && <Cursor/>}
            <Navigation/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/a-propos" component={About}/>
                <Route path="/portfolio" component={Portfolio}/>
                <Route component={QuatreCentQuatre}/>
            </Switch>
        </AppProvider>
    </Router>
);

export default App;