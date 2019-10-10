import React from 'react'

import './style.scss'

export default (props) => {
  const show = () => {
    props.history.push('/life')
  }

  return (
    <div
      className="swiper-life"
    >
      <span
        className="img"
        onClick={() => show()}
      />
      <p
        className="tit"
      >巢品TOPPING白酒</p>
    </div>
  )
}
