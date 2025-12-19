import React, { useEffect } from 'react'
import { useParams} from 'react-router-dom';
import { useState} from 'react';
import axios from 'axios';

import '../UpdateMark/UpdateMark.css'

function UpdateMark() {

    const {id} = useParams();

    const [formData, setFormData] =useState({
    tamil: '',
    english: '',
     maths: '',
    science: '',
    computer: ''
  })

  // get single student data by id
  useEffect(() => {
    axios.get(`https://student-management-django-api-5.onrender.com/student/Rank/${id}/`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch(error => {
        console.log('Error fetching student data:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
  };

   const handleUpdate = () => {
  axios.put(`https://student-management-django-api-5.onrender.com/student/Rank/${id}/`, formData)
    .then(() => {
      alert('Student marks updated successfully!');
    })
    .catch((error) => {
      console.error("Update failed:", error);
    });
};
  return (
    <div>
        <div className="update-form">
            <h1>Update Student Marks</h1>
        </div>
         <div className='Add-student'>
        <div className="add-form">
            <form>
                <label htmlFor="">Tamil:</label><br />
                <input type="number" name='tamil' placeholder='Enter your Mark' value={formData.tamil}onChange={handleChange}/>
                <br />
                <label htmlFor="">English:</label><br />
                <input type="number" name='english' placeholder='Enter your Mark' value={formData.english}onChange={handleChange}/>
                <br />
                <label htmlFor="">Maths:</label><br />
                <input type="number" name='maths' placeholder='Enter your Mark'value={formData.maths}onChange={handleChange}/>
                <br />
                <label htmlFor="">Science:</label><br />
                <input type="number" name='science' placeholder='Enter your Mark'value={formData.science}onChange={handleChange}/>
                <br />
                <label htmlFor="">Computer Science:</label><br />
                <input type="number" name='computer' placeholder='Enter your Mark'value={formData.computer} onChange={handleChange}/>
                <div className="add-button">
                    <button className="btn btn-success mt-3" onClick={handleUpdate}>Update</button>
                </div>
        </form>
        </div>
    </div>
    </div>
  )
}


export default UpdateMark;