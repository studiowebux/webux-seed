const webuxSeed = require("../index");
const path = require("path");

webuxSeed(path.join(__dirname, "defaults"))
  .then(() => {
    console.log("Finished !");
  })
  .catch(e => {
    console.error(e);
  });
