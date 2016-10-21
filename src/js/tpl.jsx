import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from '../component/Sidebar.jsx';

ReactDOM.render(
    <div>        
        <Sidebar />
        <div id="rightWrap">
            <p>index</p>            
        </div>
    </div>
    , document.querySelector('#init')
)
