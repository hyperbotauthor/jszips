const { zip, unzip } = require("./dist/index.cjs")

zip("Hello World").then(zipped => {
  console.log("zipped", zipped)

  unzip(zipped).then(unzipped => {
    console.log("unzipped", unzipped)
  })
})