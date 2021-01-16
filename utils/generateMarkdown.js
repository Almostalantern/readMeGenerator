// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
  ![Image of license](https://img.shields.io/badge/License-${data.license}-blue)
  # Table of Contents
  *[Description](#description)
  
  *[Installation Instructions](#installationinstructions)
  
  *[Contribution Guidelines](#contributionguidelines)
  
  *[Testing Information](#testinginformation)
  
  *[Contact Information](#contactinformation)


  # Description 
  ${data.proDescribe}

  # Installation Instructions
  ${data.installInstruct}

  # Contribution Guidelines
  ${data.conGuide}

  # Testing Information
  ${data.tests}

  # Contact Information
  Github:${data.githubName}
 
  Email:${data.emailAddress}



`;
}

module.exports = generateMarkdown;
