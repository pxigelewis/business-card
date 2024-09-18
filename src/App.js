import './App.css';
import About from './components/About.js'
import Info from './components/Info.js'
import Interests from './components/Interests.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='business-card-component'>
          <Info />
          <About />
          <Interests />
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
