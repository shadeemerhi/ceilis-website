"use client";

import { useCurrentUser } from "@/app/hooks/useCurrentUser";
import Button from "../design-system/Button";
import NavLink from "../design-system/NavLink";
import { signOut } from "next-auth/react";

interface IUserActionProps {
  closeDrawer?: () => void;
}

const UserActions = ({ closeDrawer }: IUserActionProps) => {
  const { user, userIsManager } = useCurrentUser();

  if (!user) {
    return null;
  }

  const onSignOut = () => {
    if (closeDrawer) {
      closeDrawer();
    }

    signOut();
  };

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      {userIsManager && (
        <NavLink
          text="Dashboard"
          href="/admin/reservations"
          onClick={closeDrawer ? closeDrawer : () => {}}
        />
      )}
      {user && <Button text="Sign Out" variant="border" onClick={onSignOut} />}
    </div>
  );
};

export default UserActions;
