import React, { useState } from 'react'
import '../AddStudent/AddStudent.css'

function AddStudent() {

  const [studentData,setStudentData]=useState({
    student_name:"",
    tamil:"",
    english:"",
    maths:"",
    science:"",
    computer:"",
    total:"",
    average:"",
    result:"",
  })
    const [resultData, setResultData] = useState(null);

  const handleChange=(e)=>{
    setStudentData({
      ...studentData,
      [e.target.name]:e.target.value
    });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://student-management-django-api-5.onrender.com/student/Rank/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(studentData)
      });

      if (!response.ok) throw new Error("Network response not ok");

      const data = await response.json();
      setResultData(data);

      // Reset form
      setStudentData({
        student_name: "",
        tamil: "",
        english: "",
        maths: "",
        science: "",
        computer: ""
      });

    } catch (error) {
      console.error("Error submitting marks:", error);
      alert("Failed to submit. Check backend or CORS.");
    }
  };

  return (
    <div className='Add-student'>
        <div className="add-form">
            <form onSubmit={handleSubmit}>
                <label>Student Name:</label>
                <br></br>
                <input type="text" name='student_name' placeholder='Enter your Name' value={studentData.student_name}onChange={handleChange}/>
                <br />
                <label htmlFor="">Tamil:</label><br />
                <input type="number" name='tamil' placeholder='Enter your Mark' value={studentData.tamil}onChange={handleChange}/>
                <br />
                <label htmlFor="">English:</label><br />
                <input type="number" name='english' placeholder='Enter your Mark' value={studentData.english}onChange={handleChange}/>
                <br />
                <label htmlFor="">Maths:</label><br />
                <input type="number" name='maths' placeholder='Enter your Mark'value={studentData.maths}onChange={handleChange}/>
                <br />
                <label htmlFor="">Science:</label><br />
                <input type="number" name='science' placeholder='Enter your Mark'value={studentData.science}onChange={handleChange}/>
                <br />
                <label htmlFor="">Computer Science:</label><br />
                <input type="number" name='computer' placeholder='Enter your Mark'value={studentData.computer} onChange={handleChange}/>
                <div className="add-button">
                     <button className='add-btn' type='submit'>Add Student</button>
                </div>
                {resultData && (
          <div className="result-box">
            <p><b>Total:</b> {resultData.total}</p>
            <p><b>Average:</b> {resultData.average}</p>
            <p><b>Result:</b> {resultData.result}</p>
          </div>
        )}
            </form>
        </div>
    </div>
  )
}

export default AddStudent