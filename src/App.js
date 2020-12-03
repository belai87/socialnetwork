import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile'
import {BrowserRouter as Router, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import state from "./redux/state";



const App = () => {
  return (
      <Router>
        <div>
          <Header />
          <main>
            <div className="container">
              <div className="row">
                  <Menu />
                  <Route path="/profile"><Profile posts={state.profile.posts} info={state.profile.info}/></Route>
                  <Route path="/dialogs"><Dialogs dialogs={state.chat.dialogs} message={state.chat.messages}/></Route>
                  <Route path="/news"><News news={state.news}/></Route>
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
