import './App.css';
import Report from './Components/Report'
import store from './store/index'
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store}>

    <div className="App">
    <Report/>
    </div>
    </Provider>
  );
}

export default App;
