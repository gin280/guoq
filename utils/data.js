import logSymbols from "log-symbols"
import chalk from "chalk"

//Alerts
const success = chalk.greenBright.inverse.bold
const info = chalk.blueBright.inverse.bold
const warning = chalk.yellowBright.inverse.bold
const error = chalk.redBright.inverse.bold

const social = `
  ${chalk.hex(`#1da1f2`).bold.inverse("WEBSITE")} 'http://www.gq.com'
  ${chalk.hex(`#6cc644`).bold.inverse("GITHUB")}  'https:www.github.com/gq'
  ${chalk.hex(`#ff0000`).bold.inverse("NPM")} 'https:www.npm.com/gq'
`

const bio = `A simple CLI to generate a GraphQL schema from a JSON file.
A simple CLI to generate a GraphQL schema from a JSON file.
A simple CLI to generate a GraphQL schema from a JSON file.`

const ad = `
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
`
export { social, bio, ad }
