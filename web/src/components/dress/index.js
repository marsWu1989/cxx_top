import React, { Component } from 'react';

import Head from './../head';
import './Dress.css';
class Dress extends Component {
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
            <div className="dressBanner" />
            <div className="dress_1" />
            <div className="dress_2" />
            <div className="dress_3" />
            <div className="dress_4" />
          </div>
        );
    }
}

export default Dress;