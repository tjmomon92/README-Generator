// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const readMe = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'Name of project?',
    },
    {
        type: 'input',
        name: 'Description',
        message: 'Description of project?',
    },
    {
        type: 'input',
        name: 'Install',
        message: 'Install requirements?',
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'Project use description?',
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'How to contribute?',
    },
    {
        type: 'input',
        name: 'Test',
        message: 'Project testing?',
    },
    {
        type: 'list',
        name: 'License',
        message: 'Desired license?',
        choices: ['Apache', 'Boost', 'Eclipse', 'IBM', 'ISC', 'MIT', 'Mozilla', 'GPL-v2', 'GPL-v3', 'GPL-LGPL'],
        filter(val) {
            return val.toLowerCase();
        }
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'GitHub profile?',
    },
    {
        type: 'input',
        name: 'Email',
        message: 'Email Address?',
    },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// };

// Function to initialize app
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const create = readMe.generateMarkdown(answers)
        fs.writeFile('README.md', create, function(err) {
            if(err) {
                console.log('Unable to save file', err);
            } else {
                console.log('File created');
            }
        })
        console.log(answers)
        return answers
    })
    .catch((error) => {
        console.log('error')
    })
}

// Function call to initialize app
init();