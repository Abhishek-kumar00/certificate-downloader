import { useState } from 'react'

export default function Component({ onFormSubmit }) {
  const [fname, setFname] = useState('');
  const [lname,setLname] = useState('');
  const [courseTraining,setCourseName]=useState('');
  const [dateOfCompletion,setDateOfCompletion]=useState('');
  const [dateOfDuration,setDateOfDuration]=useState('');


  const handleSubmit = (e) => {
    e.preventDefault()
    onFormSubmit(fname,lname,courseTraining,dateOfCompletion,dateOfDuration);
  }

  return (
    <div className=''>
      <label htmlFor="fname">
        <b>First Name</b>
        <br />
        <br />
        <input type="text" 
        id="fname" 
        name="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)} />
      </label>
      <br />
      <br />
      <label htmlFor="lname">
        <b>Last Name</b>
        <br />
        <br />
        <input type="text" 
        id="lname" 
        name="lname"
        value={lname}
        onChange={(e)=>setLname(e.target.value)} />
      </label>
      <br />
      <br />
      <label htmlFor="dateOfCompletion">
        <b>Date of completion:</b>
        <br />
        <br />
        <input placeholder="Example: October 26,2024" 
        type="text" 
        id="dateOfCompletion" 
        name="dateOfCompletion" 
        value={dateOfCompletion}
        onChange={(e)=>setDateOfCompletion(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label htmlFor="dateOfDuration">
        <b>Course Duration:</b>
        <br />
        <br />
        <input placeholder="Example: 6 months"
        type="text" 
        id="length" 
        name="length"
        value={dateOfDuration}
        onChange={(e)=>setDateOfDuration(e.target.value)} 
        />
      </label>
      <br />
      <br />
      <label htmlFor="courseTraining">
        <b>Course Name:</b>
        <br />
        <br />
        <input placeholder="Example: Full Stack Web Development" 
        type="text" 
        id="courseTraining" 
        name="courseTraining"
        value={courseTraining}
        onChange={(e)=>setCourseName(e.target.value)} 
        />
      </label>
      <br />
      <br />
      <div className="btn">
        <button type="submit" onClick={handleSubmit}>generate</button>
      </div>
    </div>
  )
}