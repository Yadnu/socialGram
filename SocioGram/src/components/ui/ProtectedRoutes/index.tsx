import * as React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
interface IPrptectedRoutesProps{

}

const ProtectedRoutes: React.FunctionComponent<IPrptectedRoutesProps> = (props) => {
  const isAuth: boolean = true;
  const location = useLocation();
 
  return isAuth ? ( <Outlet />) : (<Navigate to="/login" state={{from: location }} />)
}

export default ProtectedRoutes;