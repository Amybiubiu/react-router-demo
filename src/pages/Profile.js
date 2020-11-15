// pages/Profile.js

import { useParams, useLocation } from "react-router-dom";
import withAuth from "../components/withAuth";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Profile = () => {
  const { name } = useParams();
  // 关于useQuery的使用参见 https://reactrouter.com/web/example/query-parameters
  // 挺详细的，懒到不想写了，useQuery和useParams在我看来使用上是类似的
  let query = useQuery();
  const qname = query.get("name");
  return (
    <div>
      <h1 className="title is-1">This is the Profile Page</h1>
      <article className="message is-dark" style={{ marginTop: 40 }}>
        <div className="message-header">
          <p>{name}</p>
          <p>{qname}</p>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{" "}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </article>
    </div>
  );
};
export default withAuth(Profile)