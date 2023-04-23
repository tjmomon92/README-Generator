class readMe {
    // Function that returns a license badge based on which license is passed in
    static licenseBadge(license) {
        const badges = {
            apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            boost: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
            eclipse: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)', 
            ibm: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
            isc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
            mit: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
            mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
        }
        return badges[license]
    };

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

${this.licenseBadge(answers.license)}
    
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