import React, {Component, Suspense, lazy} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

//Routes
const Home = lazy(() => import('./routes/Home'));
const Cart = lazy(() => import('./routes/Cart'));


const App = ({store}) => {
    return (
        <Provider store={store}>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/cart" component={Cart}/>
                    </Switch>
                </Suspense>
            </Router>
        </Provider>
    );
};

export default App;
