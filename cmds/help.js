//menus
const menus = {
  main: `
  chuck [command] <options>

    today .............. show weather for today
    forecast ........... show 10-day weather forecast
    version ............ show package version
    help ............... show help menu for a command,
  `,
  today: `
   chuck today <options>

    --location, -l ..... the location to use,
  `,
  forecast: `
  chuck forecast <options>

  --location, -l ..... the location to use`,
};

module.exports = (args) => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
