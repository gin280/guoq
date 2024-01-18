import pkgJSON from "./../package.json" assert { type: "json" }
import welcome from "cli-welcome"
import checkNode from "cli-check-node"
import unhandled from "cli-handle-unhandled"

export default function () {
  unhandled()

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

  checkNode("10")
}
