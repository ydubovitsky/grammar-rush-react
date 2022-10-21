import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authStatusSelector } from "../redux/features/auth/auth.slice";
import { FETCH_STATUS } from "../redux/types";

const RequireAuthRoute = () => {
  const location = useLocation();
  const { status } = useSelector(authStatusSelector);

  if (status === FETCH_STATUS.AUTHENTICATED) {
    return <Navigate to="/main/auth" state={{ from: location }} />;
  }

  return <Outlet />;
}

export default RequireAuthRoute;