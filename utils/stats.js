import chalk from "chalk"
import fetch from "node-fetch"
import ora from "ora"

const url = "https://api.github.com/users/gin280"
const spinner = ora(chalk.green("Fetching Github Stats"))

const getGithubUser = async () => {
  spinner.start()
  try {
    const response = await fetch(url)
    const data = await response.json()
    spinner.succeed(`${chalk.yellow("Github Stats")} Fetched\n`)

    console.log(`Github Followers: ${data?.followers}`)
  } catch (e) {
    spinner.fail(`Error Fetching Github Stats`)
    console.log(e)
  } finally {
    spinner.stop()
  }
}

export default getGithubUser
