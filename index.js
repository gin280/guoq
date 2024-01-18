#!/usr/bin/env node
import chalk from "chalk"
import logSymbols from "log-symbols"
import init from "./utils/init.js"

const log = console.log
//Alerts
const success = chalk.greenBright.inverse.bold
const info = chalk.blueBright.inverse.bold
const warning = chalk.yellowBright.inverse.bold
const error = chalk.redBright.inverse.bold(() => {
  init()

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

  console.log(`
  ${logSymbols.success} ${success(
    ` SUCCESS `
  )} Created a GraphQL schema from a JSON file.
  
  ${logSymbols.info} ${info(
    ` INFO `
  )} You can now run 'npm run dev' to start the GraphQL server.
  
  ${logSymbols.warning} ${warning(
    ` WARNING `
  )} You can now run 'npm run dev' to start the GraphQL server.
  
  ${logSymbols.error} ${error(
    ` ERROR `
  )} You can now run 'npm run dev' to start the GraphQL server.
  `)
})()
