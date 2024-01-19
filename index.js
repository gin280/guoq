#!/usr/bin/env node

import { social, bio, ad } from "./utils/data.js"
import init from "./utils/init.js"
import { flags, input, showHelp } from "./utils/cli.js"
import debug from "./utils/debug.js"
import stats from "./utils/stats.js"
import enquirer from "enquirer"
const prompt = enquirer.prompt
const Confirm = enquirer.Confirm
const args = process.argv.slice(2)
const log = console.log

;(async () => {
  init(flags.clear)
  input.includes("help") && showHelp(0)

  // const questions = [
  //   {
  //     type: "input",
  //     name: "name",
  //     message: "What is your name?",
  //   },
  //   {
  //     type: "input",
  //     name: "age",
  //     message: "How old are you?",
  //   },
  //   {
  //     type: "input",
  //     name: "job",
  //     message: "What is your job?",
  //   },
  // ]

  const prompt = new Confirm({
    name: "question",
    message: "Are you sure?",
  })

  prompt.run().then((answer) => console.log("Answer:", answer))

  log(bio)
  if (flags.social) log(social)
  if (flags.ad) log(ad)

  await stats()

  debug()
})()
