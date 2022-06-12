import './App.css';
import Router from './components/Router/Router';
import {Provider} from './components/Context/context';
import {ContextValue} from './components/Context/context';


function App() {
  return (
    <Provider value={ContextValue}>
      <Router/>
    </Provider>
  );
}

export default App;