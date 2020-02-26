#!/usr/bin/env node

import {Cli, Command} from 'clipanion';

class GreetCommand extends Command {
    @Command.Boolean(`-v,--verbose`)
    public verbose: boolean = false;

    @Command.String(`--name`)
    public name?: string;

    @Command.Path(`greet`)
    async execute() {
        if (typeof this.name === `undefined`) {
            this.context.stdout.write(`You're not registered.\n`);
        } else {
            this.context.stdout.write(`Hello, ${this.name}!\n`);
        }
    }
}

const cli = new Cli({
    binaryLabel: `Clipanion Test`,
    binaryName: `clipanion`,
    binaryVersion: `1.0.0`,
});

cli.register(GreetCommand);

cli.runExit(process.argv.slice(2), {
    stdin: process.stdin,
    stdout: process.stdout,
    stderr: process.stderr,
});