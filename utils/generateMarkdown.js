// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const license = 'MIT';
const badge = renderLicenseBadge(license);
console.log(badge);
function renderLicenseBadge(license) {let badge = '';

switch (license) {
  case 'MIT':
    badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    break;
  case 'Apache 2.0':
    badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    break;
  case 'GPL 3.0':
    badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    break;
}

return badge;}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {let link = '';

switch (license) {
  case 'MIT':
    link = 'https://opensource.org/licenses/MIT';
    break;
  case 'Apache 2.0':
    link = 'https://opensource.org/licenses/Apache-2.0';
    break;
  case 'GPL 3.0':
    link = 'https://www.gnu.org/licenses/gpl-3.0';
    break;
  
}

return link;}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {let section = '';

switch (license) {
  case 'MIT':
    section = `
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
`;
    break;
  case 'Apache 2.0':
    section = `
## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).
`;
    break;
  case 'GPL 3.0':
    section = `
## License

This project is licensed under the [GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0).
`;
    break;
  // Add more cases for other licenses if needed

  default:
    section = '';
    break;
}

return section;}

// TODO: Create a function to generate markdown for README

function generateMarkdown(answers) {
  return `# ${answers.title}
  ## Description
${answers.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.Installation}


## Usage
${answers.Usage}

## License
${answers.License}

## Contributing
${answers.Contributers}

## Tests
${answers.Tests}

## Questions
GitHub Profile: [${answers.githubUsername}](https://github.com/${answers.githubUsername})

Email: ${answers.email}
`;
}

module.exports = generateMarkdown;
