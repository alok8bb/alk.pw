/*
   Pre-build script used to copy assets from content/assets to public/assets for static generation
*/

const fs = require('fs')
const path = require('path')

const src = path.join(process.cwd(), 'content', 'assets')
const dest = path.join(process.cwd(), 'public', 'assets')

if (!fs.existsSync(src)) {
  console.log('no content/assets found, skipping copy')
  process.exit(0)
}

fs.rmSync(dest, { recursive: true, force: true })
fs.mkdirSync(dest, { recursive: true })

function copyDir(s, d) {
  for (const name of fs.readdirSync(s)) {
    const sPath = path.join(s, name)
    const dPath = path.join(d, name)
    const stat = fs.statSync(sPath)
    if (stat.isDirectory()) {
      fs.mkdirSync(dPath, { recursive: true })
      copyDir(sPath, dPath)
    } else {
      fs.copyFileSync(sPath, dPath)
    }
  }
}

copyDir(src, dest)
console.log('copied content/assets → public/assets')