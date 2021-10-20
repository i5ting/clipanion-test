#!/usr/bin/env node

import {Cli, Command, Option, BaseContext} from 'clipanion';

type Context = BaseContext & {
    cwd: string;
};

class GreetCommand extends Command<Context> {
    static paths = [[`greet`]];
    public name: (string | undefined) = Option.String(`-n,--name`);
    public verbose: boolean = Option.Boolean(`-v,--verbose`, false, {description: `verbose parameter`});

    async execute() {
        if (typeof this.name === `undefined`) {
            this.context.stdout.write(`You're not registered.\n`);
        } else {
            this.context.stdout.write(`Hello, ${this.name}!\n`);
        }
    }
};

const cli = new Cli<Context>({
    binaryLabel: `Clipanion Test`,
    binaryName: `clipanion`,
    binaryVersion: `1.0.0`,
});

cli.register(GreetCommand);

cli.runExit(process.argv.slice(2), {
    stdin: process.stdin,
    stdout: process.stdout,
    stderr: process.stderr,
    cwd: process.cwd(),
});

