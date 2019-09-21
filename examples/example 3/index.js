const webuxSeed = require("../../index");
const path = require("path");

console.log("Example using async/await");
async function loadApp() {
  try {
    console.log("Loading Modules and create the APP...");

    const loaded = await webuxSeed(path.join(__dirname, "defaults"));

    if (!loaded) {
      throw new Error("Seed not Loaded");
    }

    console.log(loaded);

    console.log("Continue to load module / Start server ...");
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
}

try {
  loadApp();
} catch (e) {
  throw e;
}
