import React from "react";
import {
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function PublicProfile() {
    // The `path` lets us build <Route> paths that are
    // relative to the parent route, while the `url` lets
    // us build relative links.
    let { path, url } = useRouteMatch();

    // console.log(path);
    // console.log(url);

    // the different between path and url
    // matchPath("/users/2", {
    //     path: "/users/:id",
    //     exact: true,
    //     strict: true
    //   });
      
      //  {
      //    isExact: true
      //    params: {
      //        id: "2"
      //    }
      //    path: "/users/:id"
      //    url: "/users/2"
      //  }
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}/Amybiubiu`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/Shally`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/Wendy`}>Props v. State</Link>
          </li>
        </ul>
  
        <Switch>
          <Route exact path={path}>
            <h3>Please select a name.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Topic />
          </Route>
        </Switch>
      </div>
    );
  }

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
  
export default PublicProfile;