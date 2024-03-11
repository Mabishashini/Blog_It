
import './App.css';
import { Topbar } from './components/topbar/Topbar';
import { Home } from './pages/home/Home';
import { Single } from './pages/single/Single';
import { Write } from './pages/write/Write';
import { Settings } from './pages/settings/Settings';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import {Route, Routes} from "react-router-dom";
import { useContext } from 'react';
import { Context } from './context/Context';
import axios from 'axios';

function App() {
  const {user} = useContext(Context)
  axios.defaults.baseURL="https://blog-it-8pw8.onrender.com/api";
  return (
  
    <div className="App">
      <Topbar/>
      
      <Routes>
        <Route  path="/" exact element={<Home/>}/>
        <Route path="/register" element={user ? <Home/> :<Register/>}/>
        <Route path="/login" element={user ? <Home/> :<Login/>}/>
        <Route path="/write" element={user ? <Write/> :<Home/>}/>
        <Route path="/settings" element={user ? <Settings/> : <Register/>}/>
        <Route path="/post/:postId" element={<Single/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
