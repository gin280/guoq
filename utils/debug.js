import { input, flags } from "./cli.js"

export default function () {
  if (flags.debug) {
    console.log(input)
    console.log(flags)
  }
}
