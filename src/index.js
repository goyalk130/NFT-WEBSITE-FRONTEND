import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import Home from './components/home/home';
import Blogs from './components/blogs/blogs';
import News from './components/news/news';
import Navi from './components/navi';
import Header from './components/header/header';


ReactDOM.render(
  <Router>
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/blogs' element={<Blogs/>}>
        <Route path=':id' element={<Blogs/>}/>
      </Route>
      <Route path='/news' element={<News/>}/>
      <Route path='/:param' element={<Navi/>}/>
    </Routes>
  </Router>,
  document.getElementById('root')
);
