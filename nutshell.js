const executeEcho = function (msg) {
  return msg.join(" ");
};

const executeCommand = function ([cmd, ...msg]) {
  switch (cmd) {
    case "echo": return executeEcho(msg);
  }
};

while (true) {
  const command = prompt("ankitakarn@Ankitas-MacBook-Pro shell %");
  const output = executeCommand(command.split(" "));
  
  console.log(output);
}