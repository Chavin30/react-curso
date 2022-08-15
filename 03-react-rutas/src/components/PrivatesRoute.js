import { Navigate } from "react-router-dom";


const PrivateRoute = ({ component:Component }) => {
    return auth ? <Component/> : <Navigate to="/login" />;
 };

 export default PrivateRoute

 let auth;
 auth = false;
 auth = true;