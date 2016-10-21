import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from '../component/Sidebar.jsx';
import Topbar from '../component/Topbar.jsx';

import '../less/component/rightContainer.less';

ReactDOM.render(
    <div>        
        <Sidebar cKey="chart"/>
        <div id="rightWrap">
            <Topbar />
            <p>chart</p>            
        </div>
    </div>
    , document.querySelector('#init')
)