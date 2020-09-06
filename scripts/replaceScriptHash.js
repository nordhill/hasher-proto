const fs = require('fs')

const rehashedFileName = fs.readdirSync('./build').filter((fileNameInFolder) => 
  fileNameInFolder.startsWith('index') && fileNameInFolder.endsWith('js'))[0]
const htmlContent = fs.readFileSync('./build/index.html', { encoding: 'utf-8' }).toString()
const updatedContent = htmlContent.replace(/index.*.js/gi, rehashedFileName)
fs.writeFileSync('./build/index.html', updatedContent, { encoding: 'utf-8' })
