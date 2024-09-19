
import { Routes , Route } from 'react-router-dom';
import './App.css';
import { Signup } from './pages/Signup';
import Home from './pages/Home'
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
