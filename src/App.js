import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { Provider } from 'react-redux';
import { store } from './redux/normalRedux/store';

function App() {
  return (
    <Provider store={store}>
      <Login />
    </Provider>
  );
}

export default App;
