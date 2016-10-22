import React from 'react';
import ReactDOM from 'react-dom';

import Sidebar from '../component/Sidebar.jsx';
import Topbar from '../component/Topbar.jsx';
import Title from '../component/Title.jsx';

import '../less/component/Rightcontainer.less';

ReactDOM.render(
    <div>        
        <Sidebar cKey="chart"/>
        <div id="rightWrap">
            <Topbar />
            <div id="conWrap">
            	<Title name="数据概览" />
            </div>            
        </div>
    </div>
    , document.querySelector('#init')
)