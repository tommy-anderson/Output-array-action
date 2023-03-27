const core = require('@actions/core');
const github = require('@actions/github');


const start = Number(core.getInput('start'))
const end = Number(core.getInput('end'))

console.log(`start: ${start}, end: ${end}`)
const arr = Array.from({length: end - start + 1}, (v, k) => k + start)
console.log(`arr: ${arr}`)
core.setOutput("outputArr", arr);