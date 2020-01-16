import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cookie from "react-cookies";
import Head from './../head';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            cur: 1,
            spots: [
              <li className="cur spot_1" onClick={() => this.handleTab(1, true)} key="1" />,
              <li className="spot spot_2" onClick={() => this.handleTab(2, true)} key="2" />,
              <li className="spot spot_3" onClick={() => this.handleTab(3, true)} key="3" />,
              <li className="spot spot_4" onClick={() => this.handleTab(4, true)} key="4" />
            ]
        };
        this._mousewheel = this.mousewheel.bind(this);
    }
    componentDidMount() {
        const clientHeight = document.documentElement.clientHeight;
        const clientWidth = document.documentElement.clientWidth;
        window.addEventListener('mousewheel', this._mousewheel);
        this.setIntervalTab();
        // this.refs.line.style.width = '777px';
        setTimeout(() => {
            this.refs.line.style.width = '707px';
            this.refs.bannerItem.children[0].style.opacity = 1;
            this.handleTab(1)
            // console.log('spots', this.refs.spots_box.children[0].style.opacity)
            this.refs.spots_box.children[0].style.top = 0;
            this.refs.spots_box.children[1].style.top = 0;
            this.refs.spots_box.children[2].style.top = 0;
            this.refs.spots_box.children[3].style.top = 0;
        }, 1);
        this.setState({
            clientHeight: clientHeight,
            clientWidth: clientWidth
        })
    }
    componentWillUnmount() {
        window.removeEventListener('mousewheel', this._mousewheel);
        clearInterval(this.state.tab);
    }
    mousewheel(event) {
        event = event || window.event;
        let num = this.state.index;
        if (event.wheelDelta < 0) { //向上滚动
            if (num === 1) {
                num = 5;
            }
            this.handleTab(num - 1, true, 'up');
        }
        if (event.wheelDelta > 0) { //向下滚动
            if (num === 4) {
                num = 0;
            }
            this.handleTab(num + 1, true, 'down');
        }
    }
    // 绑定定时器，10秒播放一次
    setIntervalTab() {
        const tab = setInterval(() => {
            this.handleTab(this.state.index);
        }, 10000);
        this.setState({
            tab: tab,
        });
    }
    // 绑定切换，支持自动播放及点击切换 clear：ture为点击后
    handleTab(n, clear, wheel) {
        console.log('nnnn', n, wheel)
        let num = n;
        const temp = [];
        // 更新按钮，i为按钮个数
        for (let i = 1; i <= 4; i++) {
            if (i === num) {
                temp.push(<li className={`cur spot_${i}`} onClick={() => this.handleTab(i, true)} key={i} />);
                this.refs.bannerItem.children[num - 1].style.opacity = 1;
                this.refs.bannerItem.children[num - 1].style.visibility = 'visible';
                this.setState({
                    cur: i,
                });
            } else {
                temp.push(<li className={`spot spot_${i}`}  onClick={() => this.handleTab(i, true)} key={i} />);
                console.log('this.refs.bannerItem', i)
                this.refs.bannerItem.children[i - 1].style.opacity = 0;
                this.refs.bannerItem.children[i - 1].style.visibility = 'hidden';
            }
        }
        // 5为图片个数，自动循环播放，1 2 3 4 5
        
        if (!wheel) {
            // return true;
            if (num === 4) {
                num = 1;
            } else {
                num++;   
            }
        }
        this.setState({
            spots: temp,
            index: num,
        });
        // 点击后重新切换计时 clear：ture为点击后
        if (clear) {
            clearInterval(this.state.tab);
            this.setIntervalTab();
        }
    }
    handleClick(index) {
        let toLink = "/life";
        if (this.state.cur == 3) {
            toLink = "/dress";
        } else if (this.state.cur == 4) {
            toLink = "/chest";
        }
        console.log('index', index)
        const clientHeight = document.documentElement.clientHeight;
        const clientWidth = document.documentElement.clientWidth;
        this.refs.bannerItem.style.opacity = 0;
        setTimeout(() => {
            // this.refs[`bg_${index}`].style.diplay = 'block';
            this.refs[`bg_${index}`].style.zIndex = 3;
            this.refs[`bg_${index}`].style.width = `${clientWidth}px`;
            this.refs[`bg_${index}`].style.height = `${clientHeight}px`;
            this.refs[`bg_${index}`].style.margin = 0;
            this.refs[`bg_${index}`].style.top = 0;
            this.refs[`bg_${index}`].style.left = 0;
        }, 0);
        setTimeout(() => {
            this.props.history.push(toLink);
        }, 2000)
      clearInterval(this.state.tab);
    }
    handleLang(lang) {
        cookie.save('lang', lang)
    }
    render() {
        const lang = cookie.load('lang') || 'zh-CN';
        
        return (
          <div className="App">
            <Head props={this.props} cur={this.state.cur} />
            <div className="main">
              <ul ref="bannerItem">
                <li className="img_1" onClick={() => this.handleClick(1)}  />
                <li className="img_2"><Link to="/brand"><span>Brand Story</span><span>品牌故事</span></Link></li>
                <li className="img_3" onClick={() => this.handleClick(3)} />
                <li className="img_4" onClick={() => this.handleClick(4)} />
              </ul>
            </div>
            {
                this.state.cur !== 2?<div className="text" ref="text" />:null
            }
            <div className={`bg bg_${this.state.cur}`} ref={`bg_${this.state.cur}`} />
            <div className="bottom">
              <div className="spots">
                <ul ref="spots_box">
                  {this.state.spots}
                </ul>
              </div>
              <div className="lang">
                <div className={`cn ${lang == 'zh-CN'?'langCur':''}`} onClick={() => this.handleLang('zh-CN')}><a href="/">中</a></div>
                <div className={`en ${lang == 'en-US'?'langCur':''}`} onClick={() => this.handleLang('en-US')}><a href="/">EN</a></div>
              </div>
              <div className="line" ref="line" />
            </div>
          </div>
        );
    }
}

export default Home;