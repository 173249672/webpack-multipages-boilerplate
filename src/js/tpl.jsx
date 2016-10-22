import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from '../component/Sidebar.jsx';
import Topbar from '../component/Topbar.jsx';
import Title from '../component/Title.jsx';

import '../less/component/Rightcontainer.less';

ReactDOM.render(
    <div>        
        <Sidebar cKey="index"/>
        <div id="rightWrap">
            <Topbar />
            <div id="conWrap">
            	<Title name="首页" />
            </div>            
        </div>
    </div>
    , document.querySelector('#init')
)