#!/usr/bin/env node
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const clipanion_1 = require("clipanion");
class GreetCommand extends clipanion_1.Command {
    constructor() {
        super(...arguments);
        this.verbose = false;
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
__decorate([
    clipanion_1.Command.Boolean(`-v,--verbose`)
], GreetCommand.prototype, "verbose", void 0);
__decorate([
    clipanion_1.Command.String(`--name`)
], GreetCommand.prototype, "name", void 0);
__decorate([
    clipanion_1.Command.Path(`greet`)
], GreetCommand.prototype, "execute", null);
const cli = new clipanion_1.Cli({
    binaryLabel: `My Utility`,
    binaryName: `bin`,
    binaryVersion: `1.0.0`,
});
cli.register(GreetCommand);
cli.runExit(process.argv.slice(2), {
    stdin: process.stdin,
    stdout: process.stdout,
    stderr: process.stderr,
});
