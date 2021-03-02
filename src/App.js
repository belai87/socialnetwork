
import {BrowserRouter as Router, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import MenuContainer from "./components/Menu/MenuContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderComntainer";
import LoginPage from "./components/Login/Login";


const App = (props) => {
  return (
      <Router>
        <div>
          <HeaderContainer />
          <main>
            <div className="container">
              <div className="row">
                  <MenuContainer/>

                  <Route path="/profile/:userId?">
                      <ProfileContainer
                          state={props.state.profile}
                          dispatch={props.dispatch}/>
                  </Route>

                  <Route path="/dialogs">
                      <DialogsContainer
                          state={props.state.chat}
                          dispatch={props.dispatch}/>
                  </Route>

                  <Route path="/users">
                      <UsersContainer state={props.state.users}/>
                  </Route>

                  <Route path="/news">
                      <News news={props.state.news}/>
                  </Route>
                  <Route path="/music"><Music /></Route>
                  <Route path="/setting"><Setting /></Route>

                  <Route path="/login"><LoginPage login={props.state.auth}/></Route>
              </div>
            </div>
          </main>
        </div>
      </Router>
  );
}

export default App;
