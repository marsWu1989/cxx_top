import React, { Component } from 'react';

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
            this.refs[`bannerText${i}`].style.left = '27%';
            this.refs[`bannerText${i}`].style.opacity = 1;
          } else {
            this.refs[`bannerText${i}`].style.left = '100%';
            this.refs[`bannerText${i}`].style.opacity = 0;
          }
      }
    }
    render() {
      const content_index = this.state.content_index;
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
                  <div className="life_1" />
                  <div className="life_2" />
                  <div className="life_3" />
                  <div className="life_4" />
                  <div className="life_5" />
                  <div className="life_6" />
                  <div className="life_7">
                    <p><b>规格： 125ml/瓶    酒精度： 53%vol</b></p>
                    <p><b>原料： 高粱  小麦  水</b></p>
                    <p><b>份： 5年以上基酒与陈年老酒勾调而成</b></p>
                    <p><span>酒体色泽清亮透明，酱香突出，适口感强，口味协调，微醺之下，绵长回甘。为年轻人所爱，恰到好处的量，尽兴的同时又能尽显个性。</span></p>
                  </div>
                </li>
                <li className={`${content_index[1]?'content_cur':''}`}>
                  <div className="banner_fuel" />
                  <div className="fuel_1" />
                  <div className="fuel_2">
                    <p><b>规格： 700ml/瓶    酒精度： 53%vol</b></p>
                    <p><b>原料： 高粱  小麦  水</b></p>
                    <p><b>年份： 7年以上基酒与陈年老酒勾调而成</b></p>
                    <p><span>酒体微黄透明，酱香丰满，入口柔和，<br />
                      香味细腻，一饮而尽，空杯留香。<br />
                      从设计到创意，步步为赢，<br />
                      只为让你肆意燃烧，行素无忌。</span></p>
                  </div>
                </li>
                <li className={`${content_index[2]?'content_cur':''}`}>
                  <div className="banner_intoxic" />
                  <div className="intoxic_1" />
                  <div className="intoxic_2" />
                  <div className="intoxic_3" />
                  <div className="intoxic_4" />
                  <div className="intoxic_5" />
                  <div className="intoxic_6">
                    <p><b>规格： 500ml/瓶    酒精度： 53%vol</b></p>
                    <p><b>原料： 高粱  小麦  水</b></p>
                    <p><b>年份： 8年以上基酒与陈年老酒勾调而成</b></p>
                    <p><span>酒体色泽微黄透明，酱香浓郁，入口柔绵，<br />
                      风格突出，推杯换盏，回味悠长。<br />
                      叛逆又不失优雅精致，<br />
                      绝对是助兴潮搭的不二之选。</span></p>
                  </div>
                </li>
                <li className={`${content_index[3]?'content_cur':''}`}>
                  <div className="banner_wrold" />
                  <div className="wrold_1" />
                  <div className="wrold_2" />
                  <div className="wrold_3" />
                  <div className="wrold_4" />
                  <div className="wrold_5" />
                  <div className="wrold_6" />
                  <div className="wrold_7">
                    <p><b>规格： 500ml/瓶    酒精度： 53%vol</b></p>
                    <p><b>原料： 高粱  小麦  水</b></p>
                    <p><b>年份： 12年以上基酒与陈年老酒勾调而成</b></p>
                    <p><span>酒体微黄清亮透明，酱香醇厚，<br />
                      口感醇香，幽雅细腻，酒至酣处，<br />
                      空杯留香持久。 <br />
                      以纯粹致敬时光，创造属于你的人生主场。</span></p>
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
                    <p><b>规格： 125ml/瓶    酒精度： 53%vol</b></p>
                    <p><b>原料： 高粱  小麦  水</b></p>
                    <p><b>年份： 5年以上基酒与陈年老酒勾调而成</b></p>
                    <p><span>酒体微黄透明，酱香丰满，入口柔和，<br />
                      香味细腻，一饮而尽，空杯留香。<br />
                      从设计到创意，步步为赢， <br />
                      只为让你肆意燃烧，行素无忌。</span></p>
                  </div>
                </li>
                <li className={`${content_index[5]?'content_cur':''}`} />
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