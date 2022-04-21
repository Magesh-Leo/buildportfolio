import router from "next/router";
import React, { useReducer, useContext, createContext, useEffect } from "react";

import tokenService from "../token.service";
import { isObjNotEmpty } from "../utils/typeGaurds";
import { User } from "./User";
import { UserActions, UserActionTypes } from "./userContext.types";

type UserStateContextType = {
  userState: UserState;
  addUser: (user: User) => void;
  removeUser: () => void;
};

type UserState = { user: User | undefined };
type UserProviderProps = { children: React.ReactNode };

// Context
const UserStateContext = createContext<UserStateContextType | undefined>(
  undefined
);

const userReducer = (state: UserState, action: UserActions): any => {
  switch (action.type) {
    case UserActionTypes.ADD_USER: {
      return { ...state, user: action.payload };
    }
    case UserActionTypes.REMOVE_USER: {
      return { user: {} };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
};

function UserProvider({ children }: UserProviderProps) {
  const [state, dispatch] = useReducer(userReducer, { user: {} });
  const { getUser, setUser, removeUser: removeUserLS } = tokenService;
  const user = getUser();

  const reloadUser = () => {
    if (isObjNotEmpty(user)) {
      console.log(user, "dispatching, 🟢🟢🟢");
      dispatch({
        type: UserActionTypes.ADD_USER,
        payload: user,
      });
    } else {
      // Route user to login page
      console.log("🔴", user, "User not found", "🔴");
      // Route user to login page
      const unprotectedRoutes = ["/sign-in"];
      const isUnprotectedRoute = unprotectedRoutes.some((route) =>
        router.pathname.includes(route)
      );
      if (!isUnprotectedRoute) {
        router.push("/sign-in");
      }
    }
  };

  const addUser = (user: User): void => {
    console.log("🟢", user, "addingu user", "🟢");
    // Set user in local storage
    setUser(user);
    dispatch({
      type: UserActionTypes.ADD_USER,
      payload: user,
    });
  };

  const removeUser = (): void => {
    dispatch({
      type: UserActionTypes.REMOVE_USER,
    });
    removeUserLS();
  };

  // useEffect(() => {
  //   reloadUser();
  // }, []);

  const value = { userState: state, addUser, removeUser };

  return (
    <UserStateContext.Provider value={value}>
      {children}
    </UserStateContext.Provider>
  );
}

function useUser() {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}

export { UserProvider, useUser };
