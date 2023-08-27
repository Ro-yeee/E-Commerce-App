import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, Outlet } from "react-router";

function PrivateRoutesForAuth() {

  const user = useSelector(state => state.user)
  return (
    user.isLoggedIn ? <Navigate to="/"/> : <Outlet/>
  )
}

export default PrivateRoutesForAuth
