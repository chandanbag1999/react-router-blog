// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Component/Home/Home.jsx';
import Contact from './Component/Contact/Contact.jsx';
import User from './Component/User/User.jsx';
import Github, { GithubLoader } from './Component/Github/Github.jsx';
import Regarding from './Component/Regarding/Regarding.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='regarding' element={<Regarding/>} />
          <Route path='contact' element={<Contact/>} />
          <Route path='user/:userid' element={<User/>} />
          <Route path='github' element={<Github/>} loader={GithubLoader} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
