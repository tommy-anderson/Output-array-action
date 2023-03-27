const core = require('@actions/core');
const github = require('@actions/github');


const start = Number(core.getInput('start'))
const end = Number(core.getInput('end'))

core.setOutput("outputArr", Array.from({length: end - start + 1}, (v, k) => k + start));