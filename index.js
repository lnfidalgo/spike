#!/usr/bin/env node
/* eslint-disable @typescript-eslint/no-require-imports */

const shell = require('shelljs');
const yargs = require('yargs');

const { argv } = yargs;
const appName = argv._[0];

if (!shell.which('git')) {
	console.log('Git é necessário para executar este script.'.red);
	shell.exit(1);
}

if (!appName) {
	console.log('Por favor, informe o nome do projeto.'.red);
	shell.exit(1);
}

const repoUrl = 'https://github.com/farenxcompany/boilerplate';

shell.exec(`git clone --depth=1 ${repoUrl} ${appName}`);
shell.cd(appName);
shell.rm('-rf', '.git');
shell.exec('npm install');
console.log('Boilerplate instalado com sucesso!'.green);
