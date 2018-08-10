import React from 'react';
import ReactDOM from 'react-dom';
import Header from './head.jsx';
import Img from "./demo.png"

import './App.scss';

class App extends React.Component{
    render(){
        return (
        <div>
            <Header />
            <div className='main'>hello world</div>
            <img src={Img} alt="" />
        </div>
    );
    }
}
export default App;
