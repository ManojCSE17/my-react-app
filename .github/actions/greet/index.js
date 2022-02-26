const core = require('@actions/core');
const github = require('@actions/github');

try{
    const name = core.getInput('whom-to-greet');
    
    const t = new Date();

    core.setOutput("time-of-greet", t.toTimeString());

    console.log('Hello ${name}');

    console.log(JSON.stringify(github));

}catch(error){
    core.setFailed(error.message);
}