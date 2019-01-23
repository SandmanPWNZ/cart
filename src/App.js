import React, {Suspense, lazy} from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import Loading from './containers/Loading';
import Header from './containers/Header';

//Routes
const Home = lazy(() => import('./routes/Home'));
const Cart = lazy(() => import('./routes/Cart'));

const App = ({store}) => {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Header/>
                    <main className={'layout'}>
                        <Suspense fallback={<Loading/>}>
                            <Switch>
                                <Route exact path="/" render={() => <Home/>}/>
                                <Route path="/cart" render={() => <Cart/>}/>
                            </Switch>
                        </Suspense>
                    </main>
                </div>
            </Router>
        </Provider>
    );
};

export default App;
