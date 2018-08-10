import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

ReactDOM.render(
    <div>
        <App/>
    </div>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
