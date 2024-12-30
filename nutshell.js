let currDir = "~";
const path = "ankitakarn@Nishus-MacBook-Pro ";
const directory = [currDir];
const files = [];

const executeEcho = function (msg) {
  return msg.join(" ");
};

const executeCd = function (msg) {
  if (msg.join("") === "..") {
    currDir = directory.at(directory.indexOf(currDir) - 1);
    return;
  }
  currDir = directory.slice(-1).join();
};

const executeLs = () => {
  return files.join("         ");
};

const executeTouch = function (msg) {
  files.push(msg);
};

const executeMkdir = function (msg) {
  directory.push(msg.join(" "));
};

const executeCommand = function ([cmd, ...msg]) {
  switch (cmd) {
    case "echo":
      return executeEcho(msg);

    case "cd":
      return executeCd(msg);

    case "ls":
      return executeLs();

    case "touch":
      return executeTouch(msg);

    case "mkdir":
      return executeMkdir(msg);
  }
};

while (true) {
  const command = prompt(path + currDir + " %");
  const output = executeCommand(command.split(" "));

  if (output !== undefined) {
    console.log(output);
  }
}
