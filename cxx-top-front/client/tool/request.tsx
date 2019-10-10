import 'isomorphic-fetch'
import gaQuery from 'tool/gaQuery'

const remove = (el) => {
  try {
    const load = document.getElementById('loading')
    if (load && el && el.firstChild !== null) el.removeChild(load)
  } catch (e) {
    console.log(e)
  }
}

const add = (el) => {
  const loading = document.createElement('div')
  loading.className = 'loading'
  loading.id = 'loading'

  if (el) el.appendChild(loading)
}

export default async (
  uri,
  body,
  ga,
) => {
  // 是否查询按钮
  if (ga) gaQuery(body)

  // loading
  const empty = document.querySelector('#app > div:nth-child(2) > div:nth-child(2) > div:nth-child(2)')
  if (empty) remove(empty)
  if (empty) add(empty)

  // 过滤数据
  const opts = {}
  Object.keys(body || {}).forEach((key) => {
    if (
      body[key] !== ''
      && body[key] !== undefined
      && body[key] !== null
      // 页签切换自更新标签
      && key !== 'load'
    ) opts[key] = body[key]
  })

  return fetch(
    uri,
    {
      method: 'POST',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }),
      cache: 'default',
      body: JSON.stringify(opts),
      credentials: 'include',
    },
  )
    .then((response) => {
      if (response.status > 200) {
        return {
          code: response.status,
          msg: '网络错误',
        }
      }
      if (response.url.endsWith('.html')) window.location.href = response.url
      if (response.url.endsWith('/login')) window.location.href = response.url
      return response.json()
    })
    .then((stories) => {
      remove(empty)
      return stories
    })
}
