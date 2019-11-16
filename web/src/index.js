import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Routers from './router.js';
import * as serviceWorker from './serviceWorker';
import { IntlProvider, addLocaleData } from 'react-intl';
import cookie from "react-cookies";
/*
*引入与navigator.languages[0]所对应的语言；
*如果没有引入对应的语言，会使用默认的“en”；
*导致FormattedMessage的映射不会成功；
*/
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
/*
*引入自定义的映射表；
*通过与FormattedMessage的id值来当索引映射返回值；
*/
import enUS from './locale/en_US';
import zhCN from './locale/zh_CN';
const messages = {};
messages['en-US'] = enUS;
messages['zh-CN'] = zhCN;

addLocaleData([...zh, ...en]);
const lang = cookie.load('lang') || 'zh-CN'
ReactDOM.render(
            <IntlProvider
                locale={lang}
                messages={messages[lang]}
                key={lang}
            >
            <BrowserRouter>
                <Routers />
            </BrowserRouter>
        </IntlProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
