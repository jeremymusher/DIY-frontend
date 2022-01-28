import logo from './logo.svg';
import './App.css';
import { Route } from "react-router-dom";
import Home from './components/Home'
import Header from './components/Header';
import PostDetails from "./components/PostDetails"
import EditPost from "./components/EditPost"
import Footer from './components/Footer';
import NewPost from './components/NewPost';

function App() {
  const url = `${process.env.REACT_APP_API_URL}posts/`;

  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={() => <Home url={url} />} />
      <Route path="/details/:_id" component={PostDetails} />
      <Route path="/update/:_id" component={EditPost} />
      <Route path="/new" component={() => <NewPost url={url}/>} />
      <Footer />
    </div>
  );
}

export default App;
