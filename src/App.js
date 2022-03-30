import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import Friends from './Friends/Friends';
import About from './About/About';

function App() {


    /* 
    links - https://reactrouter.com/docs/en/v6/getting-started/tutorial
    */
  return (
    <div className="App">
      <Home></Home>
      <Friends></Friends>
      <About></About>
    </div>
  );
}

export default App;
