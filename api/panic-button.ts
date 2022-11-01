import type { VercelRequest, VercelResponse } from '@vercel/node'
import data from './data.json'

let _locales: { [localeKey: string]: any[] } = {}

export default async (request: VercelRequest, response: VercelResponse) => {
  const { locale } = request.query
  const d = getLocaleData(locale as string)
  const random = generateRandom(d.length)
  const r = d[random]
  if (r) {
    return response.status(200).send({ data: r.data })
  }

  return response.status(400).send({ error: 'Not found' })
}

function generateRandom(limit: number) {
  const max = Math.floor(limit)
  return Math.floor(Math.random() * (max - 0 + 1)) + 0
}

function getLocaleData(locale: string) {
  let list = _locales[locale]
  if (!list) {
    list = data.filter((el: any) => {
      return el.locale === locale
    })
    _locales[locale] = list
  }
  return list
}
