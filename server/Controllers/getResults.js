import {spawn} from "child_process"
import readline from "readline"
const getResults = async (script,usn)=>{
    const code = spawn("python",[script,usn]);
   

    const result = await new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
          });
        let output;
        code.stdout.on("data",(data)=>{
            output = data;
        })

        code.stderr.on("data",(data)=>{
            console.log("Python Error : "+data);
            reject(`Error occur in python`);
        })

        code.stdout.once('data', () => {
            // Prompt the user for input
            rl.question('Enter input: ', (input) => {
              // Send user input to the Python script
              pythonProcess.stdin.write(input + '\n');
          
              // Close the readline interface
              rl.close();
            })});

        code.on("exit",(data)=>{
            console.log("Code executed successfully")
            resolve(output);
        })
    }).catch((err)=> console.log(err))
    console.log("get;oiidshb"+result);
}

export {getResults};