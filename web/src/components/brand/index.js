import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Head from './../head';
import './Brand.css';

class Brand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content_index: [true, false]
        };
    }
    handleTab(n) {
        const content_index = this.state.content_index;
        // 更新按钮，i为按钮个数
        for (let i = 0; i <= 1; i++) {
            if (i === n) {
                content_index[i] = true;
            } else {
                content_index[i] = false;
            }
        }
        this.setState({
            content_index: content_index
        });
    }
    render() {
        const content_index = this.state.content_index;
        return (
          <div className="App">
            <Head props={this.props} cur={this.state.cur} />
            <div className="brand_tabs">
              <ul className='brand_tabs_box'>
                <li onClick={() => this.handleTab(0)} key="1">
                    <span className={`${content_index[0]?'brand_tab brand_tab_cur':'brand_tab'}`}><FormattedMessage id="sub_title_1" /></span>
                </li>
                <li onClick={() => this.handleTab(1)} key="2">
                    <span className={`${content_index[1]?'brand_tab brand_tab_cur':'brand_tab'}`}><FormattedMessage id="sub_title_2" /></span>
                </li>
              </ul>
            </div>
            <div className="brand_content">
                <ul>
                    <li className={`${content_index[0]?'content_cur':''}`}>
                        <div className="brand_title">Brand Story</div>
                        <div className="brand_desc">品牌故事</div>
                        <i className="brand_img1" />
                        <div className="brand_text"><FormattedMessage id="brand_text_1" values={{ br: <br /> }} /></div>
                    </li>
                    <li className={`${content_index[1]?'content_cur':''}`}>
                        <div className="brand_title">Brand vision</div>
                        <div className="brand_desc">品牌愿景</div>
                        <i className="brand_img2" />
                        <div className="brand_text"><FormattedMessage id="brand_text_2" values={{ br: <br /> }} /></div>
                    </li>
                </ul>
            </div>
          </div>
        );
    }
}

export default Brand;