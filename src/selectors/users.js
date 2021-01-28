import { createSelector } from "reselect";

export const isLoggedIn = (state) => state.users.isLoggedIn;

export const getUserName = (state) => state.users.userProfile.username;

export const getUserProfile = (state) => state.users.userProfile;

export const isLoading = (state) => state.users.loading;

const getUsers = (state) => state.users.users.byId;

const getUserIds = (state) => state.users.users.allIds;

export const getUserList = createSelector(
  getUsers,
  getUserIds,
  (users, userIds) => userIds.map((userId) => users[userId])
);
