import logo from './logo.svg';
import './App.css';
import Shop from './components/Shop';

import { Provider } from 'react-redux';
import store from './store';
import HooksShops from './components/HooksShops';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
       <Shop></Shop>
       <HooksShops></HooksShops>
     </div>
    </Provider>

  );
}

export default App;
