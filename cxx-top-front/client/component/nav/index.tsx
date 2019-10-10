import React, {
  useState,
} from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export default (props) => {
  console.log(props)
  const list = [
    {
      en: 'BRAND STORY',
      cn: '品牌故事',
    },
    {
      en: 'TOPPING LIQUOR',
      cn: '巢品白酒',
    },
    {
      en: 'CLOTHING',
      cn: '服装和饰品',
    },
    {
      en: 'LUGGAGE',
      cn: '箱包',
    },
    {
      en: 'CUSTOMMADE',
      cn: '订制',
    },
    {
      en: 'HOT TO BUY',
      cn: '如何购买',
    },
  ]
  const [open, setOpen] = useState(false)
  console.log(open)

  return (
    <div className={!open ? "nav" : "nav active"}>
      <div
        className="logo"
        onClick={() => props.history.push('/')}
      />
      <div className="slogin" />
      <div
        className={!open ? "btn" : "btn active"}
        onClick={() => setOpen(!open)}
      >
        <span className="one" />
        <span className="two" />
        <span className="thr" />
      </div>
      <ul className="list">
        {
          list.map(
            v => (
              <li
                className={open ? "active" : ""}
              >
                <Link to={v.en}>
                  <span>{v.en}</span>
                  <em>{v.cn}</em>
                </Link>
              </li>
            )
          )
        }
      </ul>
    </div>
  )
}
