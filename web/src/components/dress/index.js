import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Head from './../head';
import cookie from "react-cookies";
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
        const lang = cookie.load('lang');
        let dress_text_1 = 'dress_text_1',
        dress_text_2 = 'dress_text_2';
        if (lang == 'en-US') {
            dress_text_1 = 'dress_text_1 dress_text_1_en';
            dress_text_2 = 'dress_text_2 dress_text_2_en';
        }
        return (
          <div className="App" ref="app">
            <Head props={this.props} />
            <div className="dressBanner" />
            <div className="dress_1" />
            <div className="dress_2">
                <div className={dress_text_1}><FormattedMessage id="dress_text_1" values={{ br: <br /> }} /></div>
            </div>
            <div className="dress_3" />
            <div className="dress_4">
                <div className={dress_text_2}><FormattedMessage id="dress_text_2" values={{ br: <br /> }} /></div>
            </div>
          </div>
        );
    }
}

export default Dress;