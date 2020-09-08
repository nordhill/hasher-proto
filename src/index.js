import cryptojs from 'crypto-js'
import { toLeet }from './leet'

const getHashableInput = document.getElementById('hashable')
const hashResult = document.getElementById('hashResult')

const debounce = (func, wait = 100) => {
  let timeout;
  return function(...args) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(this, args)
    }, wait)
  }
}

const getSHA3GeneratedStr = (str) => {
  return cryptojs.SHA3(str).toString()
}

const copyToClipboard = (text, cb) => {
  const data = [new ClipboardItem({ 'text/plain': new Blob([text], { type: 'text/plain' })})]
  navigator.clipboard.write(data).then(() => {
    if(cb) cb()
  })
}

const generate = () => {
  const { value } = getHashableInput
  const hash = getSHA3GeneratedStr(toLeet(value))
  const firstLetters = hash.slice(0, 3)
  const ellipsedHash = `${firstLetters}...`
  copyToClipboard(hash, () => {
    hashResult.innerHTML = ellipsedHash
  })
}

const debouncedGenerate = debounce(generate, 300)

getHashableInput.addEventListener('keydown', debouncedGenerate)

getHashableInput.focus()
