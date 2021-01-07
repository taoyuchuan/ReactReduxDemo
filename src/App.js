import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import NewCakeContainer from './components/NewCakeContainer'
import CookieContainer from './components/CookieContainer'

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <CookieContainer />
      </div>
    </Provider>
  )
}

export default App;
