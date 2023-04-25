import { User } from "@prisma/client";
import { ReactNode, createContext, useContext } from "react";

interface ICurrentUserContext {
  user: User | null;
}

const CurrentUserContext = createContext<ICurrentUserContext>({
  user: null,
});

export const useCurrentUser = () => {
  return useContext(CurrentUserContext);
};

interface ICurrentUserProviderProps {
  user: User | null;
  children: ReactNode;
}

const CurrentUserProvider = ({ user, children }: ICurrentUserProviderProps) => {
  return (
    <CurrentUserContext.Provider value={{ user }}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export default CurrentUserProvider;
