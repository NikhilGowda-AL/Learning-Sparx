import { useState } from "react";
import NotesTable from "./NotesTable";
import "../css/notes.css";
const Notes = () => {
 let [data,setData] = useState();
 let [trigger,setTrigger] = useState(false);
  return (
    <>
      <div>
        <h1 className="notesHead">Engineering Study Materials</h1>
        <div className="inputContainer">
          <form action="" onSubmit={(e)=>{
            e.preventDefault();
            setTrigger(true);
          }}>
            <div className="branchAndSemister">
              <div className="containerForBranch">
                <select name="branch" id="branch"  onChange={(e) =>{
            e.preventDefault();
            let name = e.target.name;
            let value = e.target.value;
            setData({...data,[name]:value});
          }} required>
                  <option value="">Select your Branch </option>
                  <option value="cse">CSE</option>
                  <option value="ise">ISE</option>
                  <option value="ece">ECE</option>
                  <option value="eee">EEE</option>
                  <option value="ete">ETE</option>
                  <option value="mech">MECH</option>
                  <option value="civil">CIVIL</option>
                  <option value="aiml">AIML</option>
                  <option value="iot">IOT</option>
                  <option value="ds">DS</option>
                </select>

              </div>
              <div className="containerForBranch">
                <select name="sem" id="branch"  onChange={(e) =>{
            e.preventDefault();
            let name = e.target.name;
            let value = e.target.value;
            setData({...data,[name]:value});

          }} required>
                  <option value="">Select your Semester</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                </select>
              </div>
            </div>
            <div className="infoBtn">
              <button type="submit" className="inputBtns">Submit</button>
              <button type="reset" className="inputBtns" onClick={()=>setTrigger(false)}>Reset</button>
            </div>
          </form>
        </div>
      </div>
      {trigger && <NotesTable data={data}/>}
    </>
  );
};

export default Notes;
