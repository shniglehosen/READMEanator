// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !== 'no license used'){
      return `![badge](https://img.shields.io/badge/license-${license}-blue )`;
    } else{
      return ' ';
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if(license !== 'no license used'){
      return `![badge](https://img.shields.io/badge/license-${license}-blue )`;
    } else{
      return ' ';
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {  if (license !== 'no license used'){
    return `[License](#table-of-contents) 
    This project is under the following license: 
    `;
  } else{
    return '';
  }}
  
  function renderLicenseToTableOfContents(license) {
    if (license !== 'no license used'){
      return `[License](#license)`;
    } else{
      return '';
    }
  }
  
  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}
    ${renderLicenseBadge(data.license)}
    ## Table of Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * ${renderLicenseToTableOfContents(data.license)}
    * [Contributer](#contributer)
    * [Tests](#tests)
    * [Questions](#questions)
     
     ## [Description](#table-of-contents)
     ${data.description} 
     ## [Installation](#table-of-contents)
     ${data.install}
     ## [Usage](#table-of-contents)
     ${data.usage}
     ## ${renderLicenseSection(data.license)}
     ${renderLicenseBadge(data.license)}
     
     ## [Contributer](#table-of-contents)
     ${data.contributer}
     ## [Tests](#table-of-contents)
     ${data.testing}
     ## [Questions](#table-of-contents)
     To see my other work take a look at my public repositories on github:
     Github: [Github Link](${data.gitHubLink})
     To contact me directly please reach out to the following email:
     Email: [${data.email}](mailto:${data.email})
    `;
    }
  
  module.exports = generateMarkdown;
  