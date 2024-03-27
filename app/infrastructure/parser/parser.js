const parserCommand = (buffer) => {
  const command = buffer.toString().trim();
  const splitted = command.split("\r\n");
  console.log(splitted, command);
  return splitted[2].toLowerCase();
};

const parserArgs = (buffer) => {
  const command = buffer.toString().trim();
  const splitted = command.split("\r\n");
  const isThereArgs = splitted[4];

  const args = isThereArgs ? splitted.slice(3) : null;

  return args;
};

module.exports = { parserCommand, parserArgs };
