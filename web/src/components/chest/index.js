import React, { Component } from 'react';

import Head from './../head';
import './Chest.css';
class Chest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sub_cur: 1
        };
    }
    componentDidMount() {
    }
    // 绑定切换
    
    render() {
        return (
          <div className="App" ref="app">
            <Head props={this.props} />
            <div className="chestBanner" />
            <div className="chest_1" />
            <div className="chest_2" />
            <div className="chest_3" />
          </div>
        );
    }
}

export default Chest;