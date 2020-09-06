const fs = require('fs')

const rehashedFileName = fs.readdirSync('./docs').filter((fileNameInFolder) => 
  fileNameInFolder.startsWith('index') && fileNameInFolder.endsWith('js'))[0]
const htmlContent = fs.readFileSync('./docs/index.html', { encoding: 'utf-8' }).toString()
const updatedContent = htmlContent.replace(/index.*.js/gi, rehashedFileName)
fs.writeFileSync('./docs/index.html', updatedContent, { encoding: 'utf-8' })
