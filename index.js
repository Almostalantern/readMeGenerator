const { prompt } = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
// array of questions for user

const questions = [
    {
        type:'input',
        message:'Please enter your github username.',
        name:'githubName',
    },
    {
        type:'input',
        message:'Please enter your project title.',
        name:'projectTitle',
    },
    {
        type:'input',
        message:'Please enter your email address.',
        name:'emailAddress',
    },
    {
        type:'input',
        message:'Please enter a description of your project.',
        name:'proDescribe',
    },
    {
        type:'input',
        message:'Please enter any installation instructions.',
        name:'installInstruct',
    },
    {
        type:'list',
        message:'Please select your license.',
        name:'license',
        choices:[
            {name:"MIT", value:"MIT"},
            {name:"APACHE 2.0", value:"APACHE%202.0"},
            {name:"GPLV3", value: "GPLV3"}
        ]
    },
    {
        type:'input',
        message:'Please enter any contribution guidelines or other related information.',
        name:'conGuide',
    },
    {
        type:'input',
        message:'Please enter any testing information.',
        name:'tests'
    },
];

// function to write README file
function writeToFile(fileName, data) {
 return fs.writeFileSync(path.join(__dirname, fileName), data)
}

// function to initialize program
function init() {
prompt(questions).then(answers =>{
    writeToFile("README.md",  generateMarkdown(answers))
})


}

// function call to initialize program
init();
