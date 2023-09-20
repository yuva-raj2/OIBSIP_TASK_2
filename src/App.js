import './App.css';
import './yuvi.png';
import HeaderNav from './HeaderNav';
import Main from './Main';
import About from './About';
import Activity from './Activity';
import Dailyuse from './Dailyuse';
import Projects from './Projects';
import Contact from './Contact';
<link rel="icon" href="./yuvi.png" />
function App() {
  return (
    <div className='App'>
      <div className='Background'>
       <HeaderNav/>
        <Main/>
        <About/>
        <Activity/>
        <Dailyuse/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
