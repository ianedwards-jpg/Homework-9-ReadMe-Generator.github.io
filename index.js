const inquirer = require("inquirer");
const axios= require("axios")


//Questions Array for README input
const questions = [
    {
        name: 'Title',
        message: 'Give your project a name.',
      },
      {
        name: 'Description',
        message: 'What is your project about? What does it do? What are you hoping to accomplish with it?',
      },
      {
        name: 'Table of Contents',
        message: '',
      },
      {
        name: 'Installation',
        message: 'Describe the installation process for your project. List any modules that will need to be installed for it to run.',
      },
      {
        name: 'Usage',
        message: 'Provide instructions for the usage of your project. Include pictures as needed.',
      },
      {
        name: 'License',
        message: 'Describe what your project may and may not be used for. Include any special permissions that must be sought.',
      },
      {
        name: 'Contributing',
        message: 'If you wish for others to build on your project, include instructions on accessing the project and guidelines for contribution.',
      },
      {
        name: 'Tests',
        message: 'What kind of tests did you run?',
      },
    ]
inquirer.prompt(questions).then(answers => {
        console.info('Answer:', answers);
      })
      .catch(error => {
        if(error.isTtyError) {
          // Prompt couldn't be rendered in the current environment
        } else {
          // Something else when wrong
        }
      });



function writeToFile(fileName, answers) {
}

function init() {

}

init();
