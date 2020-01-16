import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Head.css';
class Head extends Component {
  static toTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }
  constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }
    handleClick() {
      this.setState({
        active: !this.state.active
      })
    }
    // setOverflow() {
    //     const that = this;
    //     const clientHeight = document.documentElement.clientHeight;
    //     if (that.state.active) {
    //         document.getElementsByTagName('html')[0].style.overflow = 'hidden';
    //         document.getElementsByTagName('html')[0].style.height = '100%';
    //         document.getElementsByTagName('html')[0].style.width = '100%';
    //         document.addEventListener('touchmove', Head.preHandler, false);
    //     } else {
    //         document.getElementsByTagName('html')[0].style.overflow = 'auto';
    //         document.getElementsByTagName('html')[0].style.position = 'initial';
    //         document.getElementsByTagName('html')[0].style.height = 'auto';
    //         document.removeEventListener('touchmove', Head.preHandler, false);
    //     }
    // }
    onMouseMove(e) {
      this.refs.mbg.style.display='block';
      this.refs.mbg.style.left=`${e.clientX}px`;
      this.refs.mbg.style.top=`${e.clientY}px`;
    }
    onMouseOut() {
      // console.log('2222')
      this.refs.mbg.style.display='none';
    }
    render() {
      const navState = [false, false, false, false, false, false];
      const sub_cur = this.props.sub_cur;
      let logo = <i className="logo" />;
      
      const list = [
        {
          en: 'BRAND STORY',
          cn: '品牌故事',
          route: '/brand'
        },
        {
          en: 'TOPPING LIQUOR',
          cn: '巢品白酒',
          route: '/life'
        },
        {
          en: 'CLOTHING',
          cn: '服装和饰品',
          route: '/dress'
        },
        {
          en: 'LUGGAGE',
          cn: '箱包',
          route: '/chest'
        },
        // {
        //   en: 'CUSTOMMADE',
        //   cn: '订制',
        //   route: '/custommade'
        // },
        {
          en: 'HOT TO BUY',
          cn: '如何购买',
          route: '/store'
        },
      ]
      let Mname = 'menu';
      let Nname = 'nav';
      const path = this.props.props.match.path;
      if (sub_cur == 3 || sub_cur == 4 || sub_cur == 5 || sub_cur == 6 || path == '/dress') {
        logo = <i className="logo2" />;
        Mname = 'menu2'
      }
      if (this.state.active) {
        Mname = `menu active`;
        Nname = 'nav nav_active';
        logo = <i className="logo" />;
        for (let i = 0; i <= 4; i++) {
          setTimeout(() => {
            this.refs[`nav_text_${i}`].style.bottom = 0;
          }, 0)
        }
      } else {
        for (let i = 0; i <= 4; i++) {
          setTimeout(() => {
            this.refs[`nav_text_${i}`].style.bottom = '-55px';
          }, 0)
        }
      }
      let text = "";
        if (path == '/') {
          // navState[1] = true;
          text = <span ref="text" className="slogan" />;
        } else if (path == '/life') {
          navState[1] = true;
          text = "";
        } else if (path == '/brand') {
          navState[0] = true;
          text = "";
        } else if (path == '/dress') {
          navState[2] = true;
          text = "";
        } else if (path == '/chest') {
          navState[3] = true;
          text = "";
        } else if (path == '/store') {
          navState[4] = true;
          text = "";
        } else {
          text = "";
        }
      // if (this.refs.text) {
      //   if (this.props.cur == 1) {
      //   } else {
      //   }
      // }
      return (
        <div className="Head">
          <header className="App-header">
            <Link to='/'>{logo}</Link>
            {text}
            <div className={Mname} onClick={() => this.handleClick()}>
                <span className="one" />
                <span className="two" />
                <span className="thr" />
            </div>
            <div className={Nname} onClick={() => this.handleClick()}>
              <div className="nav_box">
                {
                  list.map((item, index) => {
                    let name = 'item';
                    if (navState[index]) {
                      name = 'item item_active'
                    }
                    return <div className={name} key={index}><Link to={item.route} ref={`nav_text_${index}`}><span>{item.en}</span><span className="cn">{item.cn}</span></Link></div>
                  })
                }
              </div>
              <div className="mbg" ref="mbg" />
            </div>
          </header>
        </div>
      );
    }
}

export default Head;
