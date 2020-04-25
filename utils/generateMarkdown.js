function generateMarkdown(answers) {
  return `
# ${answers.title}
# ${answers.userName}
# ${answers.description}
# ${answers.installation}
# ${answers.usage}
# ${answers.license}
# ${answers.contributing}
# ${answers.tests}

`;
}

module.exports = generateMarkdown;
