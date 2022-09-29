// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your README?',
    'What does this application do',
    "How do I install this app?",
    "How do I use this application?",
    "Which license was used for your project?",
    "How do I contribute to this application?",
    "How do I test this application?",
    "What is your GitHub Link?",
    "What is your email?"
];
const [title, desc, install, use, license, contribute, test, gitLink, email] = questions;

// TODO: Create a function to write README file
// function writeToFile(fileName, answers) {
//     fs.writeFile('README.md', answers);
// }

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: title,
    },
    {
      type: 'input',
      name: 'description',
      message: desc,
    },
    {
      type: 'input',
      name: 'install',
      message: install,
    },
    {
      type: 'input',
      name: 'usage',
      message: use,
    },
    {
      type: 'input',
      name: 'license',
      message: license,
      // choices: ["IBM, MIT, Mozilla, Perl"]
    },
    {
        type: 'input',
        name: 'contributer',
        message: contribute,
      },
      {
        type: 'input',
        name: 'testing',
        message: test,
      },
      {
        type: 'input',
        name: 'gitHubLink',
        message: gitLink,
      },
      {
        type: 'input',
        name: 'email',
        message: email,
      }
  ])
  .then(answers => {
    console.log("Successfully Answered all questions!");
    writeToFile("README.md", generateMarkdown({...answers}));
  })
}
// Function call to initialize app
function writeToFile(fileName, data){
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
init();
