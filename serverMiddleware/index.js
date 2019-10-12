const express = require("express");
const app = express();
const execSync = require("child_process").execSync;

const cmd1 = 'python3 ${irDir}/ir_command_pi_zero.py w '

app.get("/:device/:button", (req, res) => {
  const cmd2 = '`cat ${irDir}/signalData/' + req.params.device + '/' + req.params.button + '.dat`'

  res.send(cmd1 + cmd2);

});

module.exports = {
  path: "/api/",
  handler: app
};
