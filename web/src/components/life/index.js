import React, { Component } from 'react';

import Head from './../head';
import './Life.css';

class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
              <li className="tab_1 cur"  onClick={() => this.handleTab(1)} key="1" />,
              <li className="tab_2" onClick={() => this.handleTab(2)} key="2" />,
              <li className="tab_3" onClick={() => this.handleTab(3)} key="3" />,
              <li className="tab_4" onClick={() => this.handleTab(4)} key="4" />,
              <li className="tab_5" onClick={() => this.handleTab(5)} key="5" />,
              <li className="tab_6" onClick={() => this.handleTab(6)} key="6" />
            ]
        };
    }
    componentDidMount() {
    }
    // 绑定切换，支持自动播放及点击切换 clear：ture为点击后
    handleTab(n) {
        const temp = [];
        // 更新按钮，i为按钮个数
        for (let i = 1; i <= 6; i++) {
            if (i === n) {
                temp.push(<li className={`tab_${i} cur`}  onClick={() => this.handleTab(i)} key={i} />);
            } else {
                temp.push(<li className={`tab_${i}`}  onClick={() => this.handleTab(i)} key={i} />);
            }
        }
        if (this.refs.bannerItem) {
            this.refs.bannerItem.style.display = 'block';
        }
        this.setState({
            tabs: temp
        });
    }
    render() {
        return (
          <div className="App">
            <Head />
            <div className="life">
              <ul>
                <li className="sub_1">
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
                <li className="sub_1" />
                <li className="sub_1" />
                <li className="sub_1" />
                <li className="sub_1" />
              </ul>
            </div>
            <div className="tabs">
              <ul>
                {this.state.tabs}
              </ul>
            </div>
          </div>
        );
    }
}

export default Life;