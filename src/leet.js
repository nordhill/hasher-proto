const leetLetters = Object.freeze({
  a: 4,
  b: 8,
  e: 3,
  g: 6,
  o: 0,
  s: 5,
  t: 7,
})

export const toLeet = (str) => {
  const regexStr = Object.keys(leetLetters).reduce((result, letterKey) => {
    return `${result}|${letterKey}`
  },'')
  const regex = new RegExp(`/${regexStr}/`, 'gi')
  return str.replace(regex, (matched) => {
    return leetLetters[`${matched}`.toLowerCase()]
  })
}
