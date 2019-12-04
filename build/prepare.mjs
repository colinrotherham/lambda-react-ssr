import fs from 'fs'
import { resolve } from 'path'
import info from '../package.json'

const { copyFile, mkdir, writeFile } = fs.promises

export default (async function () {
  const output = resolve('dist')

  // 1. Create ./dist directory
  await mkdir(output, { recursive: true })

  // 2. Delete development properties
  delete info.devDependencies
  delete info.husky
  delete info.scripts

  // 3. Write to ./dist package.json
  await writeFile(
    resolve(output, 'package.json'),
    JSON.stringify(info, undefined, 2)
  )

  // 4. Copy parent lockfile to ./dist
  return copyFile(
    resolve('package-lock.json'),
    resolve(output, 'package-lock.json')
  )
}())
