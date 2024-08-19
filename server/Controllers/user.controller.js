import profiles from "../Mongodb/connect.js"
import {spawn} from "child_process"
import { getResults } from "./getResults.js";
const checkUser = (req,res)=>{
    var usn = req.body.credentials.usn;
    console.log(usn)
    
    getResults("./Controllers/PythonScripts/results.py",usn)




}

export {checkUser};