import React, { Component } from 'react';
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
                                <span>巢品酒类旗舰店</span>
                                <a target="_blank" href="https://chaopinjl.tmall.com/shop/view_shop.htm?spm=a230r.1.14.4.4c6a7762BTkXkD&user_number_id=2200728483651">https://chaopinjl.tmall.com/shop/view_shop.htm?spm=a230r.1.14.4.4c6a7762BTkXkD&user_number_id=2200728483651</a>
                            </p>
                        </li>
                        <li>
                            <i className="jd" />
                            <p>
                                <span>巢品TOPPING旗舰店</span>
                                <a target="_blank" href="https://chaopinjl.tmall.com/shop/view_shop.htm?spm=a230r.1.14.4.4c6a7762BTkXkD&user_number_id=2200728483651">https://chaopinjl.tmall.com/shop/view_shop.htm?spm=a230r.1.14.4.4c6a7762BTkXkD&user_number_id=2200728483651</a>
                            </p>
                        </li>
                        <li>
                            <i className="ch" />
                            <p>
                                <span>1919线下门店</span>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        );
    }
}

export default Store;