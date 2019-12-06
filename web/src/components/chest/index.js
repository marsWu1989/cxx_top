import React, { Component } from 'react';
import cookie from "react-cookies";

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
        const lang = cookie.load('lang');
        let chest_1 = 'chest_1',
        chest_2 = 'chest_2',
        chest_3 = 'chest_3';
        if (lang == 'en-US') {
            chest_1 = 'chest_1_en';
            chest_2 = 'chest_2_en';
            chest_3 = 'chest_3_en';
        }
        return (
          <div className="App" ref="app">
            <Head props={this.props} />
            <div className="chestBanner" />
            <div className={chest_1} />
            <div className={chest_2} />
            <div className={chest_3} />
          </div>
        );
    }
}

export default Chest;