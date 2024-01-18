// import pkgJSON from "./../package.json" assert { type: "json" }
import fs from "fs"

import welcome from "cli-welcome"
import checkNode from "cli-check-node"
import unhandled from "cli-handle-unhandled"

export default function (clear) {
  const rawData = fs.readFileSync("package.json", "utf8")
  const pkgJSON = JSON.parse(rawData)

  unhandled()

  welcome({
    title: `Guoq`,
    tagLine: "by " + pkgJSON.author.name,
    description: pkgJSON.description,
    version: pkgJSON.version || "1.0.0",
    bgColor: "#6937ff",
    color: "#000000",
    bold: true,
    clear: clear,
  })

  checkNode("10")
}
