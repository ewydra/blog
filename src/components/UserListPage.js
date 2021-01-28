import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorBoundary from "./utils/ErrorBoundary";
import { fetchUserList } from "../actions/users";
import Spinner from "./utils/Spinner";
import { getUserList, isLoading } from "../selectors/users";

export default function UserListPage() {
  const dispatch = useDispatch();
  const loading = useSelector(isLoading);
  const userList = useSelector(getUserList);

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <ErrorBoundary>
      <h1 className="title">User Data</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Additional information</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.about}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ErrorBoundary>
  );
}
