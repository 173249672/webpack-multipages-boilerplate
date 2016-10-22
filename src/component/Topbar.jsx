import React from 'react';
import {Select} from 'antd';

import '../less/component/Topbar.less';
const Option = Select.Option;

export default class Topbar extends React.Component {
    constructor(props) {
        super(props);
    }
    changeAder = (v) => {
        alert(v);
    }
    logout = (v) => {
        
    }
    render() {        
        return (
            <div id="topWrap">
                <div id="aderSel">
                    <Select 
                        size="large" 
                        onChange={this.changeAder} 
                        showSearch
                        style={{ width: 200 }}
                        placeholder="请选择广告主"
                        optionFilterProp="children"
                        notFoundContent="未找到"
                    >
                        <Option value="广告主一">广告主一</Option>
                        <Option value="广告主二">广告主二</Option>
                        <Option value="广告主三">广告主三</Option>
                        <Option value="广告主四">广告主四</Option>
                        <Option value="广告主五">广告主五</Option>
                        <Option value="广告主六">广告主六</Option>
                    </Select>
                </div>
                <div id="logoutSel">
                    <Select 
                        defaultValue="超级管理员" 
                        size="large" 
                        onChange={this.logout}
                        style={{ width: 140 }} 
                    >
                        <Option value="超级管理员">超级管理员</Option>
                        <Option value="退出">退出</Option>
                    </Select>
                </div>
            </div>
        );
    }
}

