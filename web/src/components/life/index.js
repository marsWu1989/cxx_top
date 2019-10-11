import React, { Component } from 'react';

import Head from './../head';
import './Life.css';

class Life extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: [
              <li className="tab_cur" onClick={() => this.handleTab(1)} key="1"><i className="tab_1" /></li>,
              <li onClick={() => this.handleTab(2)} key="2"><i className="tab_2" /></li>,
              <li onClick={() => this.handleTab(3)} key="3"><i className="tab_3" /></li>,
              <li onClick={() => this.handleTab(4)} key="4"><i className="tab_4" /></li>,
              <li onClick={() => this.handleTab(5)} key="5"><i className="tab_5" /></li>,
              <li onClick={() => this.handleTab(6)} key="6"><i className="tab_6" /></li>
            ],
            content_index: [true, false, false, false, false, false]
        };
    }
    componentDidMount() {
    }
    // 绑定切换
    handleTab(n) {
        const content_index = this.state.content_index;
        const temp = [];
        // 更新按钮，i为按钮个数
        for (let i = 1; i <= 6; i++) {
            if (i === n) {
                temp.push(<li className="tab_cur"  onClick={() => this.handleTab(i)} key={i}><i className={`tab_${i}`} /></li>);
                content_index[i - 1] = true;
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
    render() {
      const content_index = this.state.content_index;
        return (
          <div className="App">
            <Head />
            <div className="life">
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
                <li className={`${content_index[1]?'content_cur':''}`} />
                <li className={`${content_index[2]?'content_cur':''}`} />
                <li className={`${content_index[3]?'content_cur':''}`} />
                <li className={`${content_index[4]?'content_cur':''}`} />
                <li className={`${content_index[5]?'content_cur':''}`} />
              </ul>
            </div>
            <div className="sub_tabs">
              <ul>
                {this.state.tabs}
              </ul>
            </div>
          </div>
        );
    }
}

export default Life;