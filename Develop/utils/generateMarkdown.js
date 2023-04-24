class readMe {
    // Function that returns a license badge based on which license is passed in
    static licenseBadge(license) {
        const badges = {
            apache: '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
            boost: '![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)',
            eclipse: '![License: Eclipse](https://img.shields.io/badge/License-EPL_1.0-red.svg)', 
            ibm: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]',
            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]',
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
            mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
        }
        return badges[license]
    };

    // static licenseBadge(license) {
    //     switch (license) {
    //       case 'MIT':
    //         return '![Mit](https://img.shields.io/badge/License-Mit-blue)';
    //         break;
    //       case 'GNU GPLv3':
    //         return '![GNU](https://img.shields.io/badge/License-GNU-blue)';
    //         break;
    //       case 'Apache':
    //         return '![Apache](https://img.shields.io/badge/License-Apache-blue)';
    //         break;
    //       default:
    //         return ''
    //     }
    //   } 

    // Function that returns the license link
    static licenseLink(license) {
        const links = {
            apache: '[Apache](https://www.apache.org/licenses/LICENSE-2.0)',
            boost: '[Boost](https://www.boost.org/users/license.html)',
            eclipse: '[Eclipse](https://www.eclipse.org/legal/epl-2.0/)', 
            ibm: '[IBM](https://www.ibm.com/docs/en/linux-on-systems?topic=examples-common-public-license-v10)',
            isc: '[ISC](https://opensource.org/license/isc-license-txt/)',
            mit: '[MIT](https://opensource.org/license/mit/)',
            mozilla: '[Mozilla](https://www.mozilla.org/en-US/MPL/)' 
        }
        return links[license]
    }

    // Function that returns the license section of README
    static licenseSection(license) {
        if(license) {
            return `Licensed under ${this.licenseLink(license)}`
        } else {
            return ''
        }
    }

    // Function to generate markdown for README
    static generateMarkdown(answers) {
        return `
# ${answers.Title}

${this.licenseBadge(answers.License)}
    
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
${this.licenseSection(answers.license)}
  
## Contact
${answers.GitHub}
${answers.Email}
    `;
    }
}
  
module.exports = readMe;