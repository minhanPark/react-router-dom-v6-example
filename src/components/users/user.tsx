import { useParams, Link, Outlet, useOutletContext } from "react-router-dom";
import { user } from "../../db";

const User = () => {
  const { userId } = useParams();
  const ctx = useOutletContext();
  console.log(ctx);
  return (
    <>
      <h1>
        User {userId}: name is {user[Number(userId) - 1].name}
      </h1>
      <Link to="followers">see Followers</Link>
      <Outlet
        context={{
          nameOfMyUser: user[Number(userId) - 1].name,
        }}
      />
    </>
  );
};

export default User;
