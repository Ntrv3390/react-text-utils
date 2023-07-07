import './App.css';
import { Navbar } from './modules/Navbar';
import { Textform } from './modules/Textform';
import { Footer } from './modules/Footer';
// import {BrowserRouter as Router, 
//   Routes, 
//   Route
// } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar title="Text Utils"/>
    {/* <Router>
      <Routes> */}
          {/* <Route exact path="/" element={<Textform heading="Enter the text to operate!"/>}></Route> */}
          <Textform heading="Enter the text to operate!"/>
        {/* </Routes>
      </Router> */}
      <Footer name="Mohammed Puthawala"/>
    </>  
  );
}

export default App;
