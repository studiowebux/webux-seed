const webuxSeed = require("../index");
const path = require("path");

// custom logger for testing purposes.
function Log() {
  this.info = msg => {
    console.log("## " + msg);
  };
}

const log = new Log();

webuxSeed(log, path.join(__dirname, "defaults"))
  .then(() => {
    console.log("FInished !");
  })
  .catch(e => {
    console.error("An error occur:");
    console.error(e);
  });
