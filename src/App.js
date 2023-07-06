import './App.css';
import { Navbar } from './modules/Navbar';
import { Textform } from './modules/Textform';

function App() {
  return (
    <>
      <Navbar title="Text Utils"/>
      <Textform heading="Enter a text to operate"/>
    </>  
  );
}

export default App;
