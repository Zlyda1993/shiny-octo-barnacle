const inquirer = require('inquirer');
const fs = require('fs');
const licenseOptions = [
    {
      name: 'MIT License',
      value: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    },
    {
      name: 'Apache License 2.0',
      value: '[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    },
    {
      name: 'GNU General Public License (GPL)',
      value: '[![License: GNU General Public License (GPL)](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://opensource.org/licenses/GPL-3.0)',
    },
    {
      name: 'BSD License',
      value: '[![License: BSD License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    },
  ];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your repository?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'How would you describe the repository?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How would you use the application?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'How would you install it?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'contGuide',
    },
    {
      type: 'input',
      message: 'How would you test it?',
      name: 'test',
    },
    {
      type: 'list',
      message: 'Select a license for your application:',
      name: 'license',
      choices: licenseOptions.map((option) => option.name),
    },
    {
      type: 'input',
      message: 'What is your GitHub Username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  .then((response) => {
    const { title, description, usage, install, contGuide, test, license, username, email } = response;

    const readmeContent = `
# ${title} ${licenseOptions.find((option) => option.name === license).value}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Licenses](#licenses)
- [Questions](#questions)

## Installation

${install}

## Usage

${usage}

## Contribution

${contGuide}

## Test Instructions

${test}

## Licenses

${licenseOptions.find((option) => option.name === license).value}

## Questions

GitHub Repository: [https://github.com/${username}](https://github.com/${username})

If you need to contact me, you can reach me at ${email}.
`;

    fs.writeFile(`${title}.md`, readmeContent, (err) => {
      if (err) {
        console.error('Error writing README:', err);
      } else {
        console.log(`README (${title}.md) generated successfully.`);
      }
    });
  });
