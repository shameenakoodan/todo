import { useRef } from 'react';
import './App.scss';
import MainContainer from './containers/MainContainer/MainContainer';

function App() {
  const ref = useRef(null);
  return (
    <div className="App">
      <header>
        My ToDo List
      </header>
      <MainContainer />
    </div>
  );
}

export default App;
