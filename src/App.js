import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Friends from './Friends/Friends';
import About from './About/About';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Header from './components/Header/Header';
import FriendDetails from './components/FriendDetails/FriendDetails';

function App() {


    /* 
    links - https://reactrouter.com/docs/en/v6/getting-started/tutorial
    */
  return (
    <div className="App">
      
      <Header></Header>


      {/* these routes are common for all the components . To use them in navbar inside <Header> component use <a> or <Link> components and set the href or to(Link) value as the  route path*/}
      <Routes>
        {/* ekhane path holo website link er path , folder directory er path na  */}
        <Route path='/' element={<Home></Home>} ></Route> 

        <Route path='/friends' element={<Friends></Friends>} ></Route>

        {/* path of a route can be part fixed and part dynamic.using this method we can also send data to that sub path from it's parent path element */}
        <Route path='/friends/:friendId' element={<FriendDetails></FriendDetails>}></Route>
        




        <Route path='/about' element={<About></About>} ></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>} ></Route>
        {/* page er path wrong dile PageNotFound element page show korbe. Ei Route sob route er last e mention korte hobe */}
      </Routes>

      {/* Dynamic rounte creat korte and use korte nested route use kora hoy */}

    </div>
  );
}

export default App;
