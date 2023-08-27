import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, Outlet } from "react-router";

function PrivateRoutesWithAuth() {

  const user = useSelector(state => state.user)

  return (
    user.isLoggedIn ? <Outlet/> : <Navigate to="/login"/> 
  )
}

export default PrivateRoutesWithAuth