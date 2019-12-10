import fs from 'fs'
import { resolve } from 'path'
import del from 'del'
import info from '../package.json'

const { copyFile, mkdir, writeFile } = fs.promises

export default (async function () {
  const output = resolve('dist')

  // 1. Create ./dist directory
  await mkdir(output, { recursive: true })

  // 2. Delete existing files
  await del([
    './dist/*',
    '!./dist/packag*.json',
    '!./dist/node_modules'
  ], { dot: true })

  // 3. Delete development properties
  delete info.devDependencies
  delete info.husky
  delete info.scripts

  // 4. Write to ./dist package.json
  await writeFile(
    resolve(output, 'package.json'),
    JSON.stringify(info, undefined, 2)
  )

  // 5. Copy parent lockfile to ./dist
  return copyFile(
    resolve('package-lock.json'),
    resolve(output, 'package-lock.json')
  )
}())
