import { Provider } from 'react-redux';
import './App.css';
import MainContainer from './comp/MainContainer';
import Store from './utils/store'

function App() {
  return (
    <Provider store = {Store}>
      <MainContainer />
    </Provider>
  );
}

export default App;
