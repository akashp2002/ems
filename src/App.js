import './App.css';
import Home from './components/Home';
import Nav from './components/Nav';
import Add from './components/Add';
import Edit from './components/Edit';
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Router>
      <header>
        <Nav/>
      </header>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/edit' element={<Edit/>} />

      </Routes>
    </Router>
    </div>
  );
}

export default App;
