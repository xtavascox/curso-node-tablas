const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "el valor base de la tabla ",
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "para ver en consola la tabla creada",
  }).option('h',{
    alias:'hasta',
    type:'number',
    default:10,
    describe:'el valor hasta el cual va mostrarse la tabla'
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  }).argv;
module.exports = argv;
