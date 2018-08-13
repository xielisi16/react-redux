import React from 'react';
import ReactDOM from 'react-dom';
import Header from './page/comm/head';
import Router from './router';

class App extends React.Component{
    render(){
        return (
        <div>
            <Header />
            <Router />
        </div>
    );
    }
}
export default App;
