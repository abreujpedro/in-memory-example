const parserCommand = (buffer) => {
  const command = buffer.toString().trim();
  const splitted = command.split("\r\n");
  console.log(splitted, command);
  return splitted[2].toLowerCase();
};

const parserArgs = (buffer) => {
  const command = buffer.toString().trim();
  const splitted = command.split("\r\n");
  return splitted[4].toLowerCase();
};

module.exports = { parserCommand, parserArgs };
