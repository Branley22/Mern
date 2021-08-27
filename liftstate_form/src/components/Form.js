import React, {useState} from 'react';

const Form = (props) => {
const {studentList, setStudentList} = props;

const [name, setName] = useState("");
const [tallClub, setTallClub] = useState(false);
const [favStack, setFavStack] = useState("");
const [errorMsg, setErrorMsg] = useState("");
      
const submitHandler = (e) =>{
    e.preventDefault();
  
    if(name.length<3 || favStack=== ""){
      setErrorMsg("You form is somwhat incomplete");
    }
  
    else{
        setStudentList([...studentList, {
          name: name,
          tallClub: tallClub,
          favStack: favStack
        }])
    
        setName("");
        setTallClub("");
        setFavStack("");
        setErrorMsg("");
    }
  }


  return (
      <div>
        <h1> Add a student</h1>
        {
          errorMsg?
          <p>{errorMsg}</p>
          :null
        }

        <form onSubmit={submitHandler}>
          {
            name.length>0 && name.length<3?
            <span>Your name must be atleast 3 characters long!</span>
            :null
          }
          <p>
            <label htmlFor="name">Name:</label>
            <input value={name} name="name" onChange={(e)=>{
              console.log(e.target);
              console.log(e.target.value);
              setName(e.target.value)}} type="text" />
          </p>

          <p>
            <label htmlFor="tallClub">Tall Club? (6 feet +): </label>
            <input value={tallClub} name="tallClub" onChange={(e)=>setTallClub(!tallClub)} checked={tallClub} type="checkbox" />
          </p>

          <p>
            <label htmlFor="favStack">Favorite stack:</label>
            <select value={favStack} name="favStack" onChange={(e)=>setFavStack(e.target.value)}>
              <option default>Select</option>
              <option value="mern">mern</option>
              <option value="python">python</option>
              <option value="java">java</option>
            </select>
          </p>

          <input type="submit" value="Add Student"/>
        </form>
      </div>
  )
}
export default Form;