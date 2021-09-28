import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header';
import Frontend from './pages/Frontend';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="album py-5 bg-light">
            <div className="container">
                <Route path="/frontend" component={Frontend}/>
            </div>
        </div>
    </div>
  );
}

export default App;
