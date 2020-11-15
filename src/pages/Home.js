// pages/Home.js

import React from "react";
import { withRouter } from "react-router";

const Home = ({ history, match, location }) => {
  // 参见https://reactrouter.com/web/api/Route/route-props
  // {history, match, location} 是route的传递的几个参数，或者别的api也存在可访问history参数的情况
  // 可是{history} 绝不是一个 全局可访问的对象
  // 但是参看https://reactrouter.com/web/api/Hooks/usehistory
  // 已经引入了新的hook，在Home page 访问history而不再需要withRouter wrap -> Navbar.js
  // console.log("there is home page");
  // console.log(history);
  return (
  <div>
    <h1 className="title is-1">This is the Home Page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
      risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
      nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
      lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
    </p>
  </div>
  )
};

// export default withRouter(Home);
export default Home;