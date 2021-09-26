// import data from another folder
import './App.css';
import Employeer from './Component/Employeer/Employeer';
import Header from './Component/Header/Header';

function App() {
  return (
    // call Component
    <div className="App">
      <Header></Header>
      <Employeer></Employeer>
    </div>
  );
}

export default App;
