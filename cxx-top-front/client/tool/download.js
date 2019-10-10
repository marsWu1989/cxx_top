import 'isomorphic-fetch'
import queryString from 'query-string'
import { saveAs } from 'file-saver'
import gaQuery from 'tool/gaQuery'

export default async (
  opt,
  param,
) => {
  // 下载按钮 GA 统计
  gaQuery(opt, true)
  const option = {}
  const opts = {}
  Object.assign(option, opt, param)

  // 过滤无效数据
  Object.keys(option).forEach((key) => {
    if (
      option[key] !== ''
      && option[key] !== undefined
      && option[key] !== null
    ) opts[key] = option[key]
  })
  // 获取 Excel 数据流
  const content = await fetch(
    '/api/download/downloadexcel/downloadexcel',
    {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
      cache: 'default',
      body: queryString.stringify(opts),
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
      return response.blob()
    })
    .then(stories => stories)

  // 保存为 Excel 文件
  saveAs(content, param.fileName)
}
