const core = require("@actions/core");

try {
  const name = core.getInput("who-to-greet");
  console.log(`Hello name ${name}`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);
} catch (error) {
  console.log("Error", error);
  core.setFailed(error.message);
}
