import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import NewCakeContainer from './components/NewCakeContainer'
import CookieContainer from './components/CookieContainer'
import ItemContainer from './components/ItemContainer'
import UserContainer from './components/UserContainer'

function App() {
  return (
    <Provider store = { store }>
      <div className="App">
        <ItemContainer cake />
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <NewCakeContainer />
        <CookieContainer />
        <UserContainer />
      </div>
    </Provider>
  )
}

export default App;
