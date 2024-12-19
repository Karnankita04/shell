let currDir = "~";
const path = "ankitakarn@Ankitas-MacBook-Pro ";

const executeEcho = function (msg) {
  return msg.join(" ");
};

const executeCd = function (msg) {
  currDir = msg.join(" ");
};

const executeCommand = function ([cmd, ...msg]) {
  switch (cmd) {
    case "echo": return executeEcho(msg);

    case "cd": return executeCd(msg);
  }
};

while (true) {
  const command = prompt(path + currDir + " %");
  const output = executeCommand(command.split(" "));

  if (output !== undefined) {
    console.log(output);

  }
}