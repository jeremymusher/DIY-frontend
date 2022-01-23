import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home'
import Header from './components/Header';
import PostDetails from "./components/PostDetails"

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/details/:_id" component={PostDetails} />
    </div>
  );
}

export default App;
