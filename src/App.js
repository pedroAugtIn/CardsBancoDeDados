// utilizamos npm install react-icons --save
// dados importados de data.js

import './App.css';
import CardsdeImagens from './components';
import PopupDescrição from './components/popup';
import "./components/styles.css";


function App() {
  return (
    <div className="App">
    <PopupDescrição showModal/>
    <CardsdeImagens />
    </div>
  );
}

export default App;
