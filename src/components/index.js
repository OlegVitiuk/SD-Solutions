import React from 'react';
import {Route,Switch} from 'react-router-dom';
import Info from 'routes/Info';
import About from 'routes/About';
import Header from 'components/Header';

const App = () => (
    <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={Info}/>
            <Route path="/about" component={About}/>
        </Switch>
    </div>
);

export default App
