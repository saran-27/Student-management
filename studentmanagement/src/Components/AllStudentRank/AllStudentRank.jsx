import React, { useEffect, useState } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import '../AllStudentRank/AllStudentRank.css'
import axios from 'axios'
import { useNavigate} from 'react-router-dom';

function AllStudentRank() {

  const navigate = useNavigate();
  const [allrank,setAllRank]=useState([]);

  useEffect(()=>{
    axios.get("https://student-management-django-api-5.onrender.com/studentrank/Rank/")
    .then((res)=>{
      setAllRank(res.data);
    })
    .catch((err)=>{
      console.log(err);
    });
  },[]);

  const handleDelete=(id)=>{
    axios.delete(`https://student-management-django-api-5.onrender.com/student/Rank/${id}/`)
    .then(()=>{
      alert('Student marks deleted successfully!');
    })
    .catch((error)=>{
      console.error("Delete failed:", error);
    })
  }

  return (
   <div>
     <div className='top-head row p-5'>
      <div className="top-left col-md-6">
        <h1>All Student Rank List</h1>
      </div>
      <div className="top-left col-md-6">
        <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>All Student Rank List</Breadcrumb.Item>
    </Breadcrumb>
      </div>
    </div>
    <div className="mark-table container">
      <table>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Tamil</th>
          <th>English</th>
          <th>Maths</th>
          <th>Science</th>
          <th>Computer</th>
          <th className='total'>Total</th>
          <th>Average</th>
          <th>Result</th>
           <th>Update</th>
            <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {allrank.map((rank)=>(
          <tr key={rank.id}>
            <td>{rank.student_name}</td>
             <td>{rank.tamil}</td>
              <td>{rank.english}</td>
              <td>{rank.maths}</td>
              <td>{rank.science}</td>
              <td>{rank.computer}</td>
            <td>{rank.total}</td>
            <td>{rank.average}</td>
            <td>{rank.result}</td>
            <td> <button
          className="btn btn-sm btn-primary"
          onClick={() => navigate(`/UpdateMark/${rank.id}`)}
        >
          Update ✏️
        </button></td>
          <td> <button
          className="btn btn-sm btn-primary"
          onClick={() => handleDelete(rank.id)}
        >
          Delete 🚮
        </button></td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
   </div>
  )
}

export default AllStudentRank