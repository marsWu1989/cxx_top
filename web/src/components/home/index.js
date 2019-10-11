import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Head from './../head';
import './Home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            spots: [
              <li className="cur"  onClick={() => this.handleTab(1, true)} key="1" />,
              <li className="spot" onClick={() => this.handleTab(2, true)} key="2" />,
              <li className="spot" onClick={() => this.handleTab(3, true)} key="3" />,
              <li className="spot" onClick={() => this.handleTab(4, true)} key="4" />,
              <li className="spot" onClick={() => this.handleTab(5, true)} key="5" />
            ]
        };
    }
    componentDidMount() {
        this.setIntervalTab();
        // this.refs.line.style.width = '777px';
        setTimeout(() => {
            this.refs.line.style.width = '777px';
        }, 0);
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
    handleTab(n, clear) {
        console.log(n);
        let num = n;
        const temp = [];
        // 更新按钮，i为按钮个数
        for (let i = 1; i <= 5; i++) {
            if (i === num) {
                temp.push(<li className="cur"  onClick={() => this.handleTab(i, true)} key={i} />);
            } else {
                temp.push(<li className="spot"  onClick={() => this.handleTab(i, true)} key={i} />);
            }
        }
        if (this.refs.bannerItem) {
            this.refs.bannerItem.style.left = `${-(num - 1) * 900}px`;
        }
        // 5为图片个数，自动循环播放，1 2 3 4 5
        if (num === 5) {
            num = 1;
        } else {
            num++;
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
    handleClick() {
      const clientHeight = document.documentElement.clientHeight;
      const clientWidth = document.documentElement.clientWidth;
      // this.refs.bg.style.width = clientWidth;
      // this.refs.bg.style.height = clientHeight;
      setTimeout(() => {
        this.refs.bg.style.backgroundSize = `${clientWidth}px ${clientHeight}px`;
        this.refs.bg.style.zIndex = 3;
        this.refs.bg.style.opacity = 1;
      }, 10);
    }
    render() {
        return (
          <div className="App">
            <Head />
            <div className="main">
              <ul ref="bannerItem">
                <li className="img_1" onClick={() => this.handleClick(1)} />
                <li className="img_1" onClick={() => this.handleClick(1)} />
                <li className="img_1" onClick={() => this.handleClick(1)} />
                <li className="img_1" onClick={() => this.handleClick(1)} />
                <li className="img_1" onClick={() => this.handleClick(1)} />
              </ul>
            </div>
            <div className="text">TOPPING巢品白酒</div>
            <div className="bg" ref="bg">
              <Link to="/life"></Link>
            </div>
            <div className="bottom">
              <div className="spots">
                <ul>
                  {this.state.spots}
                </ul>
              </div>
              <div className="line" ref="line" />
            </div>
          </div>
        );
    }
}

export default Home;