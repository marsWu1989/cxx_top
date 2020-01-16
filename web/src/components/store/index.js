import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Head from './../head';
import './Store.css';

class Store extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content_index: [true, false]
        };
    }
    render() {
        return (
          <div className="App">
            <Head props={this.props} />
            <div className="store_content">
                <div className="store_title">HOW TO BUY</div>
                <div className="store_desc">如何购买</div>
                <div className="buyList">
                    <ul>
                        <li>
                            <i className="tm" />
                            <p>
                                <span><FormattedMessage id="tm" /></span>
                                <a target="_blank" href="https://chaopinjl.tmall.com/shop/view_shop.htm?spm=a230r.1.14.4.4c6a7762BTkXkD&user_number_id=2200728483651">https://chaopinjl.tmall.com/shop/view_shop.htm?spm=a230r.1.14.4.4c6a7762BTkXkD&user_number_id=2200728483651</a>
                            </p>
                        </li>
                        <li>
                            <i className="jd" />
                            <p>
                                <span><FormattedMessage id="jd" /></span>
                                <a target="_blank" href="https://chaopinjl.tmall.com/shop/view_shop.htm?spm=a230r.1.14.4.4c6a7762BTkXkD&user_number_id=2200728483651">https://chaopinjl.tmall.com/shop/view_shop.htm?spm=a230r.1.14.4.4c6a7762BTkXkD&user_number_id=2200728483651</a>
                            </p>
                        </li>
                        <li>
                            <i className="ch" />
                            <p>
                                <span><FormattedMessage id="ch" /></span>
                            </p>
                        </li>
                    </ul>
                    <div className="contact">
                        <span>Tel: 4006-699-698</span>
                        <span>Email: itstopping.com</span>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default Store;