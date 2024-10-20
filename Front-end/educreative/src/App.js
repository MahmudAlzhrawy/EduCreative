
import { Routes , Route } from 'react-router-dom';
import './App.css';
import { Signup } from './pages/Signup';
import Home from './pages/Home'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Materials from './pages/Dashboard/Materials';
import LessonsArabic from './pages/Dashboard/LessonsArabic';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/le' element={<LessonsArabic/>}></Route>

        <Route path='/dashboard' element={<Dashboard/>}>
           <Route path='materials' element={<Materials/>}/>
           <Route path='materials/:Arabic' element={<LessonsArabic/>}/>
        </Route>
        

      </Routes>
    </div>
  );
}

export default App;
