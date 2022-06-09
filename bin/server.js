#!/usr/bin/env node

const path = require('path')
const baseDir = path.dirname(__dirname)
const pug = require('pug')
const yargs = require('yargs/yargs')
const {hideBin} = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
  .default('host', 'localhost')
  .default('port', 8080)
  .argv

const express = require('express')
const app = express()
app.use(express.static(path.join(baseDir, 'preview/public')))
const compiledIndex = pug.compileFile(path.join(baseDir, 'preview', 'src', 'index.pug'))

app.get('*', (requ, res) => res.send(compiledIndex()))

app.listen(argv.port, argv.host, () => {
  console.log(`Component preview running at http://${argv.host}:${argv.port}`)
})