import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fg from 'fast-glob'
import fs from 'fs-extra'
import less from 'less'

const tovDir = fileURLToPath(new URL('../packages/tov-ui', import.meta.url))

const lessFiles = fg.sync(['src/**/style/index.less', '!src/style'], {
  cwd: tovDir,
})

async function complie() {
  for (const file of lessFiles) {
    const filePath = path.resolve(tovDir, file)
    const lessCode = fs.readFileSync(filePath, 'utf-8')
    const cssCode = await less.render(lessCode, {
      paths: [path.dirname(filePath)],
    })
    const esDir = path.resolve(tovDir, `./es${file.slice(3, file.length - 4)}` + 'css')
    const libDir = path.resolve(tovDir, `./lib${file.slice(3, file.length - 4)}` + 'css')
    fs.outputFileSync(esDir, cssCode.css)
    fs.outputFileSync(libDir, cssCode.css)
  }
}

async function moveLess() {
  const lessFiles = await fg(['src/**/style/**/*.less'], {
    cwd: tovDir,
  })
  for (const file of lessFiles) {
    const filePath = path.resolve(tovDir, file)
    const lessCode = await fs.readFile(filePath, 'utf-8')
    const esDir = path.resolve(tovDir, `./es${file.slice(3)}`)
    const libDir = path.resolve(tovDir, `./lib${file.slice(3)}`)
    fs.outputFile(esDir, lessCode)
    fs.outputFile(libDir, lessCode)
  }
}
complie()
moveLess()
