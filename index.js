#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

yargs(hideBin(process.argv))
.command('blaze', 'description', (yargs) => yargs, () => console.log('420 blaze it'))
.command('yeet', 'description', (yargs) => yargs, () => console.log('420 yeet it'))
.parse()