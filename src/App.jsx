import './App.css';
import FormInfo from './Form.jsx';
import LogoInfo from './Logo.jsx';
import { useState } from 'react';

export default function Component() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [completeDate, setCompleteDate] = useState('');
  const [durationDate, setDurationDate] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(true); // State to manage visibility

  const handleFormSubmit = (name, srname, course, courseCompletionDate, duration) => {
    setFirstName(name);
    setLastName(srname);
    setCourseName(course);
    setCompleteDate(courseCompletionDate);
    setDurationDate(duration);
    setIsFormVisible(false); // Hide form after submission
  };

  const handleBackToForm = () => {
    setIsFormVisible(true); // Show the form again
  };

  return (
    <>
      {isFormVisible ? (
        <div className="startPage block">
          <FormInfo onFormSubmit={handleFormSubmit} className='Formpage' />
        </div>
      ) : (
        <div className='LogoPage'>
          <LogoInfo 
            firstName={firstName}
            lastName={lastName}
            courseName={courseName}
            completeDate={completeDate}
            durationDate={durationDate}
          />
          <button className='new-btn absolute bottom-0 right-0' onClick={handleBackToForm}>Back to Form</button>
        </div>
      )}
    </>
  )
}
