import React from 'react'
import '../Home/Home.css';
import textbook from '../image/textbook.png'
import AddStudent from '../AddStudent/AddStudent';
import { Link } from 'react-router-dom';

function Home() {
  return (
   <div>
     <div className='Top-header row p-5'>
        <div className="top-left col-md-6">
            <h1>Student Rank Management</h1>
            <img src={textbook} alt=''></img>
        </div>
        <div className="Top-head-right col-md-6">
            <ul className='px-0 px-md-0 mt-0 mt-md-2'>
                <li><Link to='/Ranklist'>All Student Rank List</Link></li>
            </ul>
        </div>
    </div>
    <AddStudent></AddStudent>
   </div>
  )
}

export default Home