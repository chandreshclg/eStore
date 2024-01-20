import logo from './logo.svg';
import './App.css';
import TopNavComponent from './Components/TopNav';
import CatNavComponent from './Components/CatNav';
import MainComponent from './Components/MainComponent';

function App() {
  return (
    <div className="App">
      <TopNavComponent/>
      <CatNavComponent/>
      <MainComponent/>
    </div>
  );
}

export default App;
