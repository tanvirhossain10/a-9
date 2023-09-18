import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Revies from './components/Reviews/Revies';
import DashBoard from './DashBoard/DashBoard';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import NotFound404 from './components/NotFound404/NotFound404';

function App() {
  return (
    <div className="App">
      {/* <Header></Header> */}
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Revies></Revies>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound404></NotFound404>}></Route>
      </Routes>

    </div>
  );
}

export default App;
