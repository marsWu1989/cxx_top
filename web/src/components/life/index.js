import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import cookie from "react-cookies";
import Head from './../head';
import './Life.css';
class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
              <li onClick={() => this.handleTab(1)} key="1"><i className="tab_1 tab_cur" /></li>,
              <li onClick={() => this.handleTab(2)} key="2"><i className="tab_2" /></li>,
              <li onClick={() => this.handleTab(3)} key="3"><i className="tab_3" /></li>,
              <li onClick={() => this.handleTab(4)} key="4"><i className="tab_4" /></li>,
              <li onClick={() => this.handleTab(5)} key="5"><i className="tab_5" /></li>,
              <li onClick={() => this.handleTab(6)} key="6"><i className="tab_6" /></li>
            ],
            content_index: [true, false, false, false, false, false],
            sub_cur: 1
        };
    }
    componentDidMount() {
      // this.refs[`bannerText1`].style.left = '220px';
      setTimeout(() => {
          this.textAnimation(1)
      }, 0);
      // this.textAnimation(1)
    }
    // 绑定切换
    handleTab(n) {
        const content_index = this.state.content_index;
        const temp = [];
        // 更新按钮，i为按钮个数
        for (let i = 1; i <= 6; i++) {
            if (i === n) {
                temp.push(<li onClick={() => this.handleTab(i)} key={i}><i className={`tab_${i} tab_cur`} /></li>);
                content_index[i - 1] = true;
                this.setState({
                    sub_cur: i,
                }, this.textAnimation(i));
            } else {
                temp.push(<li onClick={() => this.handleTab(i)} key={i}><i className={`tab_${i}`} /></li>);
                content_index[i - 1] = false;
            }
        }
        if (this.refs.bannerItem) {
            this.refs.bannerItem.style.display = 'block';
        }
        this.setState({
            tabs: temp,
            content_index: content_index
        });
    }
    textAnimation(n) {
      for (let i = 1; i <= 5; i++) {
          if (i === n) {
            console.log(n)
            // this.refs[`bannerText${i}`].style.left = '27%';
            this.refs[`bannerText${i}`].style.opacity = 1;
          } else {
            // this.refs[`bannerText${i}`].style.left = '100%';
            this.refs[`bannerText${i}`].style.opacity = 0;
          }
      }
    }
    render() {
      const content_index = this.state.content_index;
      const lang = cookie.load('lang');
      let life_text_1 = 'life_text_1',
      fuel_text_1 = 'fuel_text_1',
      fuel_text_2 = 'fuel_text_2',
      fuel_text_3 = 'fuel_text_3',
      intoxic_text_1 = 'intoxic_text_1',
      intoxic_text_2 = 'intoxic_text_2',
      intoxic_text_3 = 'intoxic_text_3',
      world_text_1 = 'world_text_1',
      world_text_2 = 'world_text_2',
      c42c_text_2 = 'c42c_text_2';
      if (lang == 'en-US') {
        life_text_1 = 'life_text_1 life_text_1_en';
        fuel_text_1 = 'fuel_text_1 fuel_text_1_en';
        fuel_text_2 = 'fuel_text_2 fuel_text_2_en';
        fuel_text_3 = 'fuel_text_3 fuel_text_3_en';
        intoxic_text_1 = 'intoxic_text_1 intoxic_text_1_en';
        intoxic_text_2 = 'intoxic_text_2 intoxic_text_2_en';
        intoxic_text_3 = 'intoxic_text_3 intoxic_text_3_en';
        world_text_1 = 'world_text_1 world_text_1_en';
        world_text_2 = 'world_text_2 world_text_2_en';
        c42c_text_2 = 'c42c_text_2 c42c_text_2_en'
      }
        return (
          <div className="App" ref="app">
            <Head props={this.props} sub_cur={this.state.sub_cur} />
            <div className="life">
              <div className='bannerText' ref="bannerText1">
                <i className="lifeText1" />
                <i className="lifeText2" />
              </div>
              <div className='bannerText' ref="bannerText2">
                <i className="fuleText1" />
                <i className="fuleText2" />
              </div>
              <div className='bannerText' ref="bannerText3">
                <i className="intoxicText1" />
                <i className="intoxicText2" />
              </div>
              <div className='bannerText' ref="bannerText4">
                <i className="wroldText" />
              </div>
              <div className='bannerText' ref="bannerText5">
                <i className="limitText" />
              </div>
              <ul>
                <li className={`${content_index[0]?'content_cur':''}`}>
                  <div className="banner" />
                  <div className="life_1">
                    <div className={life_text_1}><FormattedMessage id="life_text_1" values={{ br: <br /> }} /></div>
                    <div className='life_text_2'><FormattedMessage id="life_text_2" values={{ br: <br /> }} /></div>
                  </div>
                  <div className="life_2" />
                  <div className="life_3">
                    
                  </div>
                  <div className="life_4">
                    <div className="life_text_3"><FormattedMessage id="life_text_3" values={{ br: <br /> }} /></div>
                  </div>
                  <div className="life_5" />
                  <div className="life_6" />
                  <div className="life_7">
                    <div className="life_text_4"><FormattedMessage id="life_text_4" values={{ br: <br /> }} /></div>
                    <div className="life_text_5"><FormattedMessage id="life_text_5" values={{ br: <br /> }} /></div>
                  </div>
                </li>
                <li className={`${content_index[1]?'content_cur':''}`}>
                  <div className="banner_fuel" />
                  <div className="fuel_1">
                    <div className={fuel_text_1}><FormattedMessage id="fuel_text_1" values={{ br: <br /> }} /></div>
                    <div className={fuel_text_2}><FormattedMessage id="fuel_text_2" values={{ br: <br /> }} /></div>
                    <div className={fuel_text_3}><FormattedMessage id="fuel_text_3" values={{ br: <br /> }} /></div>
                  </div>
                  <div className="fuel_2">
                    <div className="fuel_text_4"><FormattedMessage id="fuel_text_4" values={{ br: <br /> }} /></div>
                    <div className="fuel_text_5"><FormattedMessage id="fuel_text_5" values={{ br: <br /> }} /></div>
                  </div>
                </li>
                <li className={`${content_index[2]?'content_cur':''}`}>
                  <div className="banner_intoxic" />
                  <div className="intoxic_1" />
                  <div className={intoxic_text_1}><FormattedMessage id="intoxic_text_1" values={{ br: <br /> }} /></div>
                  <div className="intoxic_2" />
                  <div className={intoxic_text_2}><FormattedMessage id="intoxic_text_2" values={{ br: <br /> }} /></div>
                  <div className="intoxic_3">
                    <div className={intoxic_text_3}><FormattedMessage id="intoxic_text_3" values={{ br: <br /> }} /></div>
                  </div>
                  <div className="intoxic_4">
                    <div className="intoxic_text_4"><FormattedMessage id="intoxic_text_4" values={{ br: <br /> }} /></div>
                    <div className="intoxic_text_5"><FormattedMessage id="intoxic_text_5" values={{ br: <br /> }} /></div>
                  </div>
                  <div className="intoxic_5" />
                  <div className="intoxic_6">
                    <div className="intoxic_text_6"><FormattedMessage id="intoxic_text_6" values={{ br: <br /> }} /></div>
                    <div className="intoxic_text_7"><FormattedMessage id="intoxic_text_7" values={{ br: <br /> }} /></div>
                  </div>
                </li>
                <li className={`${content_index[3]?'content_cur':''}`}>
                  <div className="banner_wrold" />
                  <div className="wrold_1" />
                  <div className={world_text_1}><FormattedMessage id="world_text_1" values={{ br: <br /> }} /></div>
                  <div className="wrold_2" />
                  <div className="wrold_3">
                    <div className={world_text_2}><FormattedMessage id="world_text_2" values={{ br: <br /> }} /></div>
                  </div>
                  <div className="wrold_4" />
                  <div className="wrold_5" />
                  <div className="wrold_6" />
                  <div className="wrold_7">
                    <div className="world_text_3"><FormattedMessage id="world_text_3" values={{ br: <br /> }} /></div>
                    <div className="world_text_4"><FormattedMessage id="world_text_4" values={{ br: <br /> }} /></div>
                  </div>
                </li>
                <li className={`${content_index[4]?'content_cur':''}`}>
                  <div className="banner_limit" />
                  <div className="limit_1" />
                  <div className="limit_2" />
                  <div className="limit_3" />
                  <div className="limit_4" />
                  <div className="limit_5" />
                  <div className="limit_6" />
                  <div className="limit_7" />
                  <div className="limit_8" />
                  <div className="limit_9" />
                  <div className="limit_10" />
                  <div className="limit_11" />
                  <div className="limit_12" />
                  <div className="limit_13" />
                  <div className="limit_14">
                    <div className="limit_text_1"><FormattedMessage id="limit_text_1" values={{ br: <br /> }} /></div>
                    <div className="limit_text_2"><FormattedMessage id="limit_text_2" values={{ br: <br /> }} /></div>
                  </div>
                </li>
                <li className={`${content_index[5]?'content_cur':''}`}>
                  <div className="banner_42c" />
                  <div className="c42c_1">
                    <div className="c42c_text_1"><FormattedMessage id="c42c_text_1" values={{ br: <br /> }} /></div>
                  </div>
                  <div className="c42c_2">
                    <div className={c42c_text_2}><FormattedMessage id="c42c_text_2" values={{ br: <br /> }} /></div>
                  </div>
                  <div className="c42c_3" />
                  <div className="c42c_text_3"><FormattedMessage id="c42c_text_3" values={{ br: <br /> }} /></div>
                  <div className="c42c_4" />
                  <div className="c42c_5">
                    <div className="c42c_text_4"><FormattedMessage id="c42c_text_4" values={{ br: <br /> }} /></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sub_tabs">
              <ul className='tab_box'>
                {this.state.tabs}
              </ul>
            </div>
          </div>
        );
    }
}

export default Life;