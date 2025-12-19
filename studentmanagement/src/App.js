import './App.css';
import Home from '../src/Components/Home/Home'
import { Routes,Route }  from 'react-router-dom';
import AddStudentRank from '../src/Components/AllStudentRank/AllStudentRank'
import UpdateMark from '../src/Components/UpdateMark/UpdateMark';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}>
          </Route>
          <Route path='/RankList' element={<AddStudentRank/>}>
          </Route>
          <Route path='/UpdateMark/:id' element={<UpdateMark/>}>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
