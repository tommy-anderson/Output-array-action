const core = require('@actions/core');
const github = require('@actions/github');


const start = Number(core.getInput('start'))
const end = Number(core.getInput('end'))

// output a stringified array starting with start and ending with end, inclusive
core.setOutput("time", JSON.stringify(Array.from({length: end - start + 1}, (v, k) => k + start)));