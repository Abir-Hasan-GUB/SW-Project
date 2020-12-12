import './App.css';
import Banner from './Componants/Banner/Banner';
import NavBar from './Componants/NavBar/NavBar';
import Shop from './Componants/Shop/Shop';

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <Banner></Banner>
     <Shop></Shop>
    </div>
  );
}

export default App;
