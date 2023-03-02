#!/usr/bin/env node
import { rps } from 'node-rpsls'
import minimist from 'minimist'

const args = minimist(process.argv.slice(2));

// reformat the below? 
// put the below in functions
if (args.h || args.help) {
    // logs the help message
    console.log('Usage: node-rps [SHOT]\n',
    'Play Rock Paper Scissors (RPS)\n',
    '\n',
    '  -h, --help      display this help message and exit\n',
    '  -r, --rules     display the rules and exit\n',
    '\n',
    'Examples:\n',
    '  node-rps        Return JSON with single player RPS result.\n',
    '                  e.g. {"player":"rock"}\n',
    '  node-rps rock   Return JSON with results for RPS played against a simulated opponent.\n',
    '                  e.g {"player":"rock","opponent":"scissors","result":"win"}')
    process.exit(0)
}
// add try-catch statements for trying the rps and rpsls functions - if there's an error catch it and 
// log the help message and rules
if (args.r || args.rules) {
    // logs the rules
    console.log('Rules for Rock Paper Scissors:\n',
    '\n',
    '  - Scissors CUTS Paper\n',
    '  - Paper COVERS Rock\n',
    '  - Rock CRUSHES Scissors')
    process.exit(0)
}

// console.log(JSON.Stringify the object returned from rpsls functions)