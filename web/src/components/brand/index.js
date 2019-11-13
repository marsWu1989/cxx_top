import React, { Component } from 'react';
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
                    <span className={`${content_index[0]?'brand_tab brand_tab_cur':'brand_tab'}`}>品牌故事</span>
                </li>
                <li onClick={() => this.handleTab(1)} key="2">
                    <span className={`${content_index[1]?'brand_tab brand_tab_cur':'brand_tab'}`}>品牌愿景</span>
                </li>
              </ul>
            </div>
            <div className="brand_content">
                <ul>
                    <li className={`${content_index[0]?'content_cur':''}`}>
                        <div className="brand_title">Brand Story</div>
                        <div className="brand_desc">品牌故事</div>
                        <i className="brand_img1" />
                        <div className="brand_text">巢品TOPPING，成立于2018年。是一家涵盖白酒、服饰、箱包、高端定制等多元业务板块的复合型时尚潮牌，以“ITS TOPPING 喜欢而已”为品牌理念，致力高品质打造好物。品牌坚持原创即生活，生活需要有潮向；旨在倡导潮流人群对个性的追求，塑造不同自我的生活。</div>
                    </li>
                    <li className={`${content_index[1]?'content_cur':''}`}>
                        <div className="brand_title">Brand vision</div>
                        <div className="brand_desc">品牌愿景</div>
                        <i className="brand_img2" />
                        <div className="brand_text">在依托潮流领域的人群和市场细分基础上，Topping巢品将打造媒介+零售+社群三位一体的潮IP，并搭建以售卖、分享、孵化于一体的潮空间，为广大热爱潮流文化的人群提供全新的潮流产品及体验。除涵盖白酒、服饰、箱包等消费品外，同时一网打尽媒体、电商、社群、音乐节、潮流市集等多元化业务。<br /><br />原创即生活，生活需要有潮向。巢品TOPPING专注于潮流文化的创新、致力打造属于中国的原创潮牌。</div>
                    </li>
                </ul>
            </div>
          </div>
        );
    }
}

export default Brand;