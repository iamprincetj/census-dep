import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Attendance from './components/Pages/Attendance';

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/attendance" component={Attendance} />
      </Switch>
    </Router>
  );
}

export default MainRouter;
