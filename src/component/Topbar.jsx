import React from 'react';
import {Select} from 'antd';
const Option = Select.Option;

export default class Topbar extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChange = (v) => {
        if(v === '退出') {
            window.sessionStorage.clear();
        }
    }
    render() {
        let logoutWrap = {
            textAlign: 'right',
            padding: 16,
            paddingRight: 25,
            borderBottom: '1px solid #e9e9e9'
        }
        return (
            <div style={logoutWrap}>
                <Select defaultValue="超级管理员" size="large" onChange={this.handleChange}>
                    <Option value="超级管理员">超级管理员</Option>
                    <Option value="退出">退出</Option>
                </Select>
            </div>
        );
    }
}

