import React from 'react'
import Swiper from 'react-id-swiper'

import SwiperLife from 'component/swiper-life'

import './style.scss'

export default (props) => {
  const params = {
    direction: 'vertical',
    /*
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    */
    pagination: {
      el: '.swiper-pagination',
      clickable: false,
    },
  }

  return (
    <div className="swiper">
      <Swiper
        {...params}
      >
        <div>
          <SwiperLife {...props} />
        </div>
        <div>bbbb</div>
        <div>cccc</div>
        <div>dddd</div>
      </Swiper>
      <div className="line" />
      {/* 待切换 */}
      <div
        className="lang"
      >
        <span
          className="cn act"
        />
        <span
          className="en"
        />
      </div>
    </div>
  )
}
