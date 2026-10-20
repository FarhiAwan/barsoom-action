
const core = require('@actions/core');
const github = require('@actions/github');

try {
  const name = core.getInput('name');
  const greeting = `Hello, ${name}! (run by ${github.context.actor})`;
  console.log(greeting);
  core.setOutput('greeting', greeting);
} catch (error) {
  core.setFailed(error.message);
}
