let currDir = "~";
const path = "ankitakarn@Nishus-MacBook-Pro ";
const directory = [currDir];
const files = [];

const executeEcho = function (msg) {
  return msg.join(" ");
};

const executeCd = function (msg) {
  directory.push(msg.join(" "));
};

const executeLs = function () {
  return files.join("         ");
};

const executeTouch = function (msg) {
  files.push(msg);
};

const executeCommand = function ([cmd, ...msg]) {
  switch (cmd) {
    case "echo": return executeEcho(msg);

    case "cd": return executeCd(msg);

    case "ls": return executeLs();

    case "touch": return executeTouch(msg);
  }
};

while (true) {
  const command = prompt(path + directory.at(-1) + " %");
  const output = executeCommand(command.split(" "));

  if (output !== undefined) {
    console.log(output);
  }
}