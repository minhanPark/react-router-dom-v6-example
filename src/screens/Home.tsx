import { user } from "../db";
import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Home;
