
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import AddBlog from './components/AddBlog';
import ViewBlog from './components/ViewBlog';
import Myprofile from './components/Myprofile';

function App() {
  return (
    <div className="App">
     
     <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/sign' element={<Signup/>}/>
     <Route path='/add' element={<Main child={<AddBlog/>}/>}/>
     <Route path='/view' element={<Main child={<ViewBlog/>}/>}/>
     <Route path='/profile' element={<Main child={<Myprofile/>}/>}/>
     
     </Routes>
    </div>
  );
}

export default App;
