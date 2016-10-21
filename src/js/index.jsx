import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from '../component/Sidebar.jsx';

import 'antd/dist/antd.min.css';

ReactDOM.render(
    <div>        
        <Sidebar />
    </div>
    , document.querySelector('#init')
)
