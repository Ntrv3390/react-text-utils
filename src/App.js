import './App.css';
import { Navbar } from './modules/Navbar';
import { Textform } from './modules/Textform';
import { Footer } from './modules/Footer';

function App() {
  return (
    <>
      <Navbar title="Text Utils"/>
      <Textform heading="Enter a text to operate"/>
      <Footer name="Mohammed Puthawala"/>
    </>  
  );
}

export default App;
