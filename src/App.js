import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { StoreProvider } from './components/GlobalStore';
import Page404 from './components/Page404';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './components/Main';
import './components/style.css';

function App() {
  return (
    <div className="App d-flex flex-column">
      <StoreProvider>
        <Router>
          {/* Navbar */}
          <Navbar />
          {/* Main body */}
          <div className="main-body container-md">
            <Switch>
              <Route exact path="/"><Homepage /></Route>
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
