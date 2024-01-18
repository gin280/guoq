import meow from "meow"
import chalk from "chalk"

const helpText = `
  Usage
    ${chalk.green("npx guoq")} ${chalk.yellow("[--options]")} ${chalk.red(
  "[command]"
)}

  Options
    ${chalk.yellow("--social")}           Include social ${chalk.dim(
  '[Default: "true"]'
)}
    ${chalk.yellow("--no-social")}        Exclude social 
    ${chalk.yellow("--ad")}               Include ad ${chalk.dim(
  '[Default: "true"]'
)}
    ${chalk.yellow("--no-ad")}            Exclude ad
    ${chalk.yellow("--debug, -d")}        Debug mode ${chalk.dim(
  '[Default: "true"]'
)}
    ${chalk.yellow("--version, -v")}      Show version number
    ${chalk.yellow("--help, -h")}         Show help text
    ${chalk.yellow("--clear")}            Clear the console ${chalk.dim(
  '[Default: "true"]'
)}
    ${chalk.yellow("--no-clear")}         Don't clear the console

  Commands  
    help          Show help text
    version, -v   Show version number

  Examples
    npx guoq --no-social
`
const options = {
  importMeta: import.meta,
  flags: {
    clear: {
      type: "boolean",
      default: true,
    },
    social: {
      type: "boolean",
      default: true,
    },
    ad: {
      type: "boolean",
      default: true,
    },
    debug: {
      type: "boolean",
      default: false,
      shortFlag: "d",
    },
    version: {
      type: "boolean",
      default: false,
      shortFlag: "v",
    },
  },
}

const cli = meow(helpText, options)
const input = cli.input
const flags = cli.flags
const showHelp = cli.showHelp

export { input, flags, showHelp }
