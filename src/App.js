import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider } from './components/GlobalStore';
import './App.css';import './App.css';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Main';
import Instructions from './components/Instructions';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>
          {/* Navbar */}
          <Navbar />
          {/* Main body */}
          <div className="main-body">
            <Switch>
              <Route exact path="/"><Homepage /></Route>
              <Route path="/instructions"><Instructions /></Route>
              <Route><Page404 /></Route>
            </Switch>
          </div>
          {/* Footer */}
          <Footer />
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
