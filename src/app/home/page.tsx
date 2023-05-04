import { redirect } from "next/navigation";

/**
 * This route was created for users who visit deprecated /home urls
 */
const DeprecatedHomePageRoute = () => {
  return redirect("/");
};

export default DeprecatedHomePageRoute;
