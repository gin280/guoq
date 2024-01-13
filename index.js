#!/usr/bin/env node

const pkgJSON = require("./package.json")
const welcome = require("cli-welcome")

welcome({
  title: pkgJSON.name,
  tagLine: "by " + pkgJSON.author.name,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: "#FADC00",
  color: "#000000",
  bold: true,
  clear: true,
})

console.log(`
  NAME: ${pkgJSON.name}
  VERSION: v${pkgJSON.version}
  DESCRIPTION: ${pkgJSON.description}

  Usage:
    $ npx ${pkgJSON.name} [options]


`)
