import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/userContext";

import PrivateRoute from "./pages/PrivateRoute";

//pages component
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Subscribe from "./pages/Subscribe";
import LandingPage from "./pages/LandingPage";
import DetailBook from "./pages/DetailBook";
import ReadBook from "./pages/ReadBook";
import EditProfile from "./pages/EditProfile";
import NotFound from "./pages/NotFound";
import AddBook from "./pages/admin/AddBook";
import Admin from "./pages/admin/Admin";

import { API, setAuthToken } from "./config/api";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let history = useHistory();
  const [state, dispatch] = useContext(UserContext);
  // console.clear();
  console.log(state);
  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }

  //   if (state.isLogin === false) {
  //     history.push("/");
  //   } else {
  //     if (state.data.user.role === "admin") {
  //       history.push("/admin");
  //     } else if (state.data.user.role === "user") {
  //       history.push("/");
  //     }
  //   }
  // }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/subscribe" component={Subscribe} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute path="/admin" component={Admin} />
        <PrivateRoute path="/detail-book/:id" component={DetailBook} />
        <PrivateRoute path="/read-book" component={ReadBook} />
        <PrivateRoute path="/add-book" component={AddBook} />
        <PrivateRoute path="/edit-profile" component={EditProfile} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
