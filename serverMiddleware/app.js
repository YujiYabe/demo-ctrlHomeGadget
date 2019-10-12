
const express = require("express");
const app = express();
const execSync = require("child_process").execSync;
const port = 5367;

const cmd1 = 'python3 ${irDir}/ir_command_pi_zero.py w '


// CORSを許可する
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get("/:api/:device/:button", (req, res) => {
  const cmd2 = '`cat ${irDir}/signalData/' + req.params.device + '/' + req.params.button + '.dat`'

  execSync(cmd1 + cmd2);
  res.send(200);
});


app.listen(port);

