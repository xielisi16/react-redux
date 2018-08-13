import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'

import Home from './page/home';
import Page1 from './page/page1';
import Page2 from './page/page2';
import './main.less'

class Main extends React.Component{
    render(){
        return (
        <div className='main'>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/page1' component={Page1}/>
                <Route path='/page2' component={Page2}/>
          </Switch>
        </div>
    );
    }
}
export default Main;