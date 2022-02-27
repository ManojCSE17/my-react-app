const core = require('@actions/core');
const github = require('@actions/github');

try{
    const name = core.getInput('whom-to-greet');
    
    const t = new Date();

    core.setOutput("time-of-greet", t.toTimeString());

    console.log(`Hello ${name}`);

    const secret = "This is a secret";
    core.setSecret(secret);
    console.log(`Secret: ${secret}`);

    core.startGroup("Basic debug types");
    core.debug("This is a debug message!");
    core.warning("This is a warning message!");
    core.error("This is a error message!");
    core.endGroup();

    core.exportVariable("evar","This is a exported variable!");

    console.log(JSON.stringify(github));

}catch(error){
    core.setFailed(error.message);
}