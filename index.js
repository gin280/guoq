#!/usr/bin/env node

import pkgJSON from "./package.json" assert { type: "json" }
import welcome from "cli-welcome"
import chalk from "chalk"

const log = console.log

welcome({
  title: `Guoq`,
  tagLine: "by " + pkgJSON.author.name,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: "#6937ff",
  color: "#000000",
  bold: true,
  clear: true,
})

log(`
   
  ${chalk.italic(`A simple CLI to generate a GraphQL schema from a JSON file.
  A simple CLI to generate a GraphQL schema from a JSON file.
  A simple CLI to generate a GraphQL schema from a JSON file.`)}
  
  ${chalk.hex(`#1da1f2`).bold.inverse("WEBSITE")} 'http://www.gq.com'
  ${chalk.hex(`#6cc644`).bold.inverse("GITHUB")}  'https:www.github.com/gq'
  ${chalk.hex(`#ff0000`).bold.inverse("NPM")} 'https:www.npm.com/gq'

`)

log(
  chalk.greenBright.underline("Success!") +
    " Created a GraphQL schema from a JSON file."
)
