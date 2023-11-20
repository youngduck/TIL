import React from 'react';
import { Route,Routes,Link} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';


function App() {
  return (
    <>
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
    </div>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile/:username" element={<Profile profile={"velopert"}/>}/>
      </Routes>
    </div>
    </>
  );
}

export default App;

