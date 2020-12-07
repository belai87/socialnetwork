import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile'
import {BrowserRouter as Router, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";


const App = (props) => {
  return (
      <Router>
        <div>
          <Header />
          <main>
            <div className="container">
              <div className="row">
                  <Menu menu={props.state.menu}/>
                  <Route path="/profile"><Profile state={props.state.profile}/></Route>
                  <Route path="/dialogs"><Dialogs dialogs={props.state.chat.dialogs} message={props.state.chat.messages}/></Route>
                  <Route path="/news"><News news={props.state.news}/></Route>
                  <Route path="/music"><Music /></Route>
                  <Route path="/setting"><Setting /></Route>
              </div>
            </div>
          </main>
        </div>
      </Router>
  );
}

export default App;
