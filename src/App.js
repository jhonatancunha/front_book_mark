
import Home from './pages/Home';
import BookMark from './pages/BookMark';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
  return <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/:id" component={BookMark} />
    </Switch>
  </BrowserRouter>
};

export default App;
