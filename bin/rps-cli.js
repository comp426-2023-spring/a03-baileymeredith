#!/usr/bin/env node
import { rps } from 'node-rpsls'
import minimist from 'minimist'

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    // displays the help message if -h or -help is given in command prompt and exits application
    helpMessage();
    process.exit(0);
}
if (args.r || args.rules) {
    // displays the rules if -r or -rules is given in command prompt and exits application
    ruleMessage();
    process.exit(0);
}
// move is assigned to first unlabeled arg after 'node-rps ' in command prompt
const move = args._[0]
try {
    // tries to play rps and logs the result of game
    gameObject = rps(move)
    console.log(JSON.stringify(rps(gameObject)));
} catch (e){
    // if an error occurs and out-of-range argument is used, displays the rules and help message
    helpMessage()
    ruleMessage()
    process.exit(0)
}


function helpMessage() {
    // logs the help message
    console.log('Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n\n',
    '  -h, --help      display this help message and exit\n',
    '  -r, --rules     display the rules and exit\n\nExamples:\n',
    '  node-rps        Return JSON with single player RPS result.\n',
    '                  e.g. {"player":"rock"}\n',
    '  node-rps rock   Return JSON with results for RPS played against a simulated opponent.\n',
    '                  e.g {"player":"rock","opponent":"scissors","result":"win"}')
}

function ruleMessage() {
    // logs the rules
    console.log('Rules for Rock Paper Scissors:\n\n',
    ' - Scissors CUTS Paper\n',
    ' - Paper COVERS Rock\n',
    ' - Rock CRUSHES Scissors')
}