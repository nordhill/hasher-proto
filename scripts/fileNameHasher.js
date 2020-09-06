const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const fileRelativePath = process.argv[2]
const fileName = path.basename(fileRelativePath)
const fileNameWithoutExtension = fileName.split('.')[0]
const folderName = path.dirname(fileRelativePath)
const fileExtension = path.extname(fileRelativePath)
const filePath = `${__dirname}/${fileRelativePath}`
const parentFilePath = `${__dirname}/${folderName}`

// const fileNameToRehash = fs.readdirSync(parentFilePath).filter((fileNameInFolder) => 
//  fileNameInFolder.startsWith(fileNameWithoutExtension) && fileNameInFolder.endsWith(fileExtension))[0]
// const filePathRehash = filePath.replace(fileName, fileNameToRehash)

const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' }).toString()
const hash = crypto.createHash('shake256', { outputLength: 5 }).update(fileContent).digest('hex')
const newPath = filePath.replace(fileName, `${fileNameWithoutExtension}.${hash}${fileExtension}`)

fs.renameSync(filePath, newPath)
