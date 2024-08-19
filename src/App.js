import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';


function App() {
  return (
    <div className="flex flex-col items-center   bg-gray-100 w-full">

      <LandingPage />
      <Projects />
    </div>
  );
}

export default App;
