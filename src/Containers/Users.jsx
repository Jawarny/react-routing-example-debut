import UserList from "../components/usersList/UsersList";
import { USERS } from "../data/users";

const Users = () => {
  return <UserList items={USERS} />;
};

export default Users;
