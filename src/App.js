
import './App.css';
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Paste } from './components/Paste';
import ViewPaste from './components/ViewPaste';

function App() {
  return (
    <div className="App">

    <Routes>
        <Route path="/" element={
          <div>
            <Navbar/>
            <Home/>
          </div>}/>
        <Route path="/pastes" element={
          <div>
            <Navbar/>
            <Paste/>
          </div>}/>
        <Route path="/pastes/:id" element={
          <div>
            <Navbar/>
            <ViewPaste/>
          </div>}/>

    </Routes>

    </div>
  );
}

export default App;
