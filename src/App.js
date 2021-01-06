import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer'

function App() {
  return (
<<<<<<< HEAD
    <Provider store = { store }>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
=======
    <div className="App">
      <CakeContainer />
    </div>
>>>>>>> fbc35b5cb2620f25b0737e6138ae337c6aa33b6e
  );
}

export default App;
