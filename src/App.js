import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.min.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import PublicProfile from './pages/PublicProfile';
// function App() {
//   return (
//     <>
//       <Navbar />
//       <div className="container mt-2" style={{ marginTop: 40 }}>
//         <Home />
//       	<About />
//       </div>
//     </>
//   );
// }

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile/:name">
            <Profile />
          </Route>
          <Route path="/public-profile">
            <PublicProfile />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
