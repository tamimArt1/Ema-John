import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Shop} />
        <Route path='/shop' component={Shop} />
        <Route path='/orders' component={Orders} />
        <Route path='/inventory' component={Inventory} />
        <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
};

function NotFound() {
  const inlineStyle = {
    textAlign: 'center',
    color: 'red',
    margin: '1rem',
    fontSize: '3.5rem',
    fontWeight: '400',
  };
  return (
    <>
      <h1 style={inlineStyle}>Invalid URL</h1>
    </>
  );
}

export default App;
