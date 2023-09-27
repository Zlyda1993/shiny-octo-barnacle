// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();


const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What languages do you know?',
            name: 'language',
        },
        {
            type: 'input',
            message: 'What is your preferred method of communication?',
            name: 'preferred',
        },
    ])
    .then((answers) => {
        const { name, language, preferred } = answers;

        fs.appendFile('response.txt', `Name: ${name}\nLanguages: ${language}\nPreferred Language: ${preferred}\n\n`, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Responses logged!');
            }
        });
    })
    .catch((error) => {
        console.error('Error:', error);
    });

// this creates the whole page below and place this within the function 

  .then((response) => {
        const fileData = `
    This is the username: ${response.name}
    
    These are the languages: ${response.language}
    
    This is the communication: ${response.preferred}
    `
    });
fs.writeFile('result.html', fileData, (err) =>
  );

  //use writefile to make one file and replace it each time it is run in the terminal