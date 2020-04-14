var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        name: 'Title',
        message: 'What would you like to call your project?',
      },
      {
        name: 'Description',
        message: 'What is your project about?',
      },
      {
        name: 'Table of Contents',
        message: '',
      },
      {
        name: 'Installation',
        message: 'Describe the installation process for your project.',
      },
      {
        name: 'Usage',
        message: 'What will your ?',
      },
      {
        name: 'License',
        message: '',
      },
      {
        name: 'Contributing',
        message: 'What is your favorite reptile?',
      },
      {
        name: 'Tests',
        message: 'What kind of tests did you run?',
      },
          
  ])
  .then(answers => {
    console.info('Answer:', answers);
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });