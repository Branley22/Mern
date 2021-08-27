import React, {useState} from 'react';

const Display = (props) =>{
  const {studentList} = props;

  return (
    <div style={{width:"70%", margin:"auto"}}>
    <h2 style={{display:"block"}}>Roster:</h2>

      <div style={{display:"flex"}}>
      {
        studentList.map((student, index) =>(
          <div key={index}>
          <p>Name: {student.name}</p>
          {
            student.tallClub === true?
            <p>Member of the tall club!</p>
            :<p>Nah, you short...</p>
          }

          <p>Favorite Stack: {student.favStack}</p>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Display;