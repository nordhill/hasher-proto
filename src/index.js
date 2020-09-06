import cryptojs from 'crypto-js'

const getHashableInput = document.getElementById('hashable')
const hashResult = document.getElementById('hashResult')
const generateBtn = document.getElementById('generate')
const copyBtn = document.getElementById('copy')

const appState = {
  hash: null
}

const getSHA3GeneratedStr = (str) => {
  return cryptojs.SHA3(str).toString()
}

const copyToClipboard = (text) => {
  const data = [new ClipboardItem({ 'text/plain': new Blob([text], { type: 'text/plain' })})]
  copyBtn.setAttribute('disabled', true)
  navigator.clipboard.write(data).then(() => {
    copyBtn.removeAttribute('disabled')
  })
}

generateBtn.addEventListener('click', (ev) => {
  const { value } = getHashableInput
  const hash = getSHA3GeneratedStr(value)
  const firstLetters = hash.slice(0, 3)
  const ellipsedHash = `${firstLetters}...`
  hashResult.innerHTML = ellipsedHash
  appState.hash = hash
  copyBtn.removeAttribute('disabled')
})

copyBtn.addEventListener('click', () => {
  copyToClipboard(appState.hash)
})
