import './App.scss';
import Header from '../Header/Header'
import Main from '../Main/Main'
import SavedMemes from '../SavedMemes/SavedMemes'
import Footer from '../Footer/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import getMemes from '../../apiCalls/apiCalls'
import dummyData from '../../apiCalls/dummy-data';

const App = ()=> {
  let memesArray = dummyData.data.children
  

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/saved-memes">
            <SavedMemes />
          </Route>
          <Route path="/">
            <Main memesArray= { memesArray }/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
