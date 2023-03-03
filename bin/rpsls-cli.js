#!/usr/bin/env node
import { rpsls } from 'node-rpsls'
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    // displays help message if -h or -help is given in command prompt and exits application
    helpMessage();
    process.exit(0);
}
if (args.r || args.rules) {
    // displays rules if -r or -rules is given in command prompt and exits application
    ruleMessage();
    process.exit(0);
}
// move is assigned to first unlabeled arg after 'node-rpsls ' in command prompt
const move = args._[0]
try {
    // tries to play rpsls game and logs the result
    gameObject = rps(move)
    console.log(JSON.stringify(rpsls(gameObject)))
} catch (e) {
    // displays help message and rules if an error occurs and out-of-range arg is used
    helpMessage()
    ruleMessage()
    process.exit(0)
}

function helpMessage() {
    // logs the help message
    console.log('Usage: node-rpsls [SHOT]\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n\n',
    '  -h, --help        display this help message and exit\n',
    '  -r, --rules       display the rules and exit\n\nExamples:\n',
    '  node-rpsls        Return JSON with single player RPSLS result.\n',
    '                    e.g. {"player":"rock"}\n',
    '  node-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.\n',
    '                    e.g {"player":"rock","opponent":"Spock","result":"lose"}')
}

function ruleMessage() {
    // logs the rules
    console.log('Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n\n',
    ' - Scissors CUTS Paper\n',
    ' - Paper COVERS Rock\n',
    ' - Rock SMOOSHES Lizard\n',
    ' - Lizard POISONS Spock\n',
    ' - Spock SMASHES Scissors\n',
    ' - Scissors DECAPITATES Lizard\n',
    ' - Lizard EATS Paper\n',
    ' - Paper DISPROVES Spock\n',
    ' - Spock VAPORIZES Rock\n',
    ' - Rock CRUSHES Scissors')
}