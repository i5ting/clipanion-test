#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clipanion_1 = require("clipanion");
class GreetCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        this.name = clipanion_1.Option.String(`-n,--name`);
        this.verbose = clipanion_1.Option.Boolean(`-v,--verbose`, false, { description: `verbose parameter` });
    }
    async execute() {
        if (typeof this.name === `undefined`) {
            this.context.stdout.write(`You're not registered.\n`);
        }
        else {
            this.context.stdout.write(`Hello, ${this.name}!\n`);
        }
    }
}
GreetCommand.paths = [[`greet`]];
;
const cli = new clipanion_1.Cli({
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
