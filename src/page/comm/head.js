import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import './head.less';

class Header extends React.Component{
    render(){
        return (
        <div className='pageHeader'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/page1'>page1</Link></li>
                    <li><Link to='/page2'>page2</Link></li>
                </ul>   
        </div>
    );
    }
}
export default Header;