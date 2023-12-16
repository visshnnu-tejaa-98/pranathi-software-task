import { fetchUsers, removeUser } from "../redux/reducers/employeeSlice";
import store from "../redux/store";

export const getInitialData = () => store.dispatch(fetchUsers());

export const handleDeleteUser = (id) => {
  store.dispatch(removeUser(id));
};
