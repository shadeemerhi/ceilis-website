import { User } from "@prisma/client";
import { ReactNode, createContext, useContext } from "react";
import { userIsManager } from "../util/helpers/userIsManager";

interface ICurrentUserContext {
  user: User | null;
  userIsManager: boolean;
}

const CurrentUserContext = createContext<ICurrentUserContext>({
  user: null,
  userIsManager: false,
});

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};

interface ICurrentUserProviderProps {
  user: User | null;
  children: ReactNode;
}

const CurrentUserProvider = ({ user, children }: ICurrentUserProviderProps) => {
  const value: ICurrentUserContext = {
    user,
    userIsManager: user ? userIsManager(user) : false,
  };

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
