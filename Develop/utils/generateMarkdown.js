class readMe {
    // TODO: Create a function that returns a license badge based on which license is passed in
    // If there is no license, return an empty string
    // function renderLicenseBadge(license) {

    // }

    // TODO: Create a function that returns the license link
    // If there is no license, return an empty string
    // function renderLicenseLink(license) {

    // }

    // TODO: Create a function that returns the license section of README
    // If there is no license, return an empty string
    // function renderLicenseSection(license) {
  
    // }

    // Function to generate markdown for README
    static generateMarkdown(answers) {
        return `
# ${answers.Title}
    
## Table of Contents
- [Project Description](#Description)
- [Project Installation](#Install)
- [Project Usage](#Usage)
- [Project Contribution](#Contributing)
- [Project Testing](#Test)
- [Project Licensing](#License)
- [Project GitHub](#GitHub)
- [Creator Email](#Email)
  
## Description
${answers.Description}

## Installation
${answers.Install}
  
## Usage
${answers.Usage}
  
## Contribution
${answers.Contributing}
  
## Testing
${answers.Test}
  
## Licensing
${answers.License}
  
## Contact
${answers.GitHub}
${answers.Email}
    `;
    }
}
  
module.exports = readMe;