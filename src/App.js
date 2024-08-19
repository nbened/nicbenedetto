import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';


function App() {
  return (
    <div className="h-screen flex flex-col items-center pt-20 bg-gray-100 w-full p-4 overflow-y-auto ">
      <LandingPage />
      <Projects />
    </div>
  );
}

export default App;
