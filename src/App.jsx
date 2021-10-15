import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Provider } from 'jotai';

const App = () => {
  return (
    <Provider>
      <Header />
      <Shop />
    </Provider>
  );
};

export default App;
