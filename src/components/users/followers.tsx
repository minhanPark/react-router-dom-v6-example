import { useOutletContext } from "react-router-dom";

interface IContext {
  nameOfMyUser: string;
}

const Followers = () => {
  const { nameOfMyUser } = useOutletContext<IContext>();
  return <h1>{nameOfMyUser} of Followers</h1>;
};

export default Followers;
