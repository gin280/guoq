#!/usr/bin/env node

import { social, bio, ad } from "./utils/data.js"
import init from "./utils/init.js"
import { flags, input, showHelp } from "./utils/cli.js"
import debug from "./utils/debug.js"
const args = process.argv.slice(2)
const log = console.log

;(() => {
  init(flags.clear)
  input.includes("help") && showHelp(0)
  log(bio)
  if (flags.social) log(social)
  if (flags.ad) log(ad)
  debug()
})()
