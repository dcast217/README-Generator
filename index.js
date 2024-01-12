// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();// Import necessary modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Prompt the user for information about the project repository
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:'
    },
    {
        type: 'list',
        name: 'License',
        choices: ['Apache - 2.0', 'MIT', 'GPL - 3.0',],
        message: 'Pick a license'

    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed:'
    },
    {
        type: 'input',
        name: 'Contributers',
        message: 'List your collaborators, if any, with links to their GitHub profiles:'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What did you do to test your project?'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },

    // Prompt for other information such as installation instructions, usage information, etc.
    // ...

]).then(answers => {
    // Generate the README content based on the user's input
    const readmeContent = generateMarkdown(answers);




    // Write the README file

    fs.writeFile('./Output/README.md', readmeContent, err => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file generated successfully!');
        }
    });
});
