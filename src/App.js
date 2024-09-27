// import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Nav from './Nav';
import Home from './Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      {/* Start of Router */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/test" element={<p>This is a test!</p>} />
      </Routes>
    </div>
  );
}

export default App;
