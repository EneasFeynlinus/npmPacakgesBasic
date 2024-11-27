import chalk from 'chalk';
import logSymbols from "log-symbols"

// console.log(chalk.blue.bgGreen.italic("Olá, eu sou"))
// console.log(chalk.green.bgCyan.bold("Enéas"))

console.log(logSymbols.success, chalk.green.italic("Servidor iniciado"));

console.log(logSymbols.error, chalk.red.bgGray.italic("Servidor com problema"))