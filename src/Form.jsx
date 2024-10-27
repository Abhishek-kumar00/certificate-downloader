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
    <div className='text-2xl rounded-none flex-col justify-between '>
      <label htmlFor="fname" className="form-element p-4">
        <b className=''>First Name</b>
        <br />
        <input type="text"
        className="text-sm h-9 w-full " 
        id="fname" 
        name="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)} />
      </label>
      <br />
      <label htmlFor="lname" className="form-element p-4">
        <b>Last Name</b>
        <br />
        <input type="text"
        className="text-sm h-9 w-full " 
        id="lname" 
        name="lname"
        value={lname}
        onChange={(e)=>setLname(e.target.value)} />
      </label>
      <br />
      <label htmlFor="dateOfCompletion" className="form-element p-4">
        <b>Date of completion:</b>
        <br />
        <input placeholder="Example: October 26,2024" 
        className="text-sm h-9 w-full "
        type="text" 
        id="dateOfCompletion" 
        name="dateOfCompletion" 
        value={dateOfCompletion}
        onChange={(e)=>setDateOfCompletion(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="dateOfDuration" className="form-element p-4">
        <b>Course Duration:</b>
        <br />
        <input placeholder="Example: 6 months"
        className="text-sm h-9 w-full"
        type="text" 
        id="length" 
        name="length"
        value={dateOfDuration}
        onChange={(e)=>setDateOfDuration(e.target.value)} 
        />
      </label>
      <br />
      <label htmlFor="courseTraining" className="form-element p-4">
        <b>Course Name:</b>
        <br />
        <input placeholder="Example: Full Stack Web Development"
        className="text-sm h-9 w-full" 
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