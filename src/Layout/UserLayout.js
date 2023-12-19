import { Outlet, useNavigate } from "react-router-dom"
import LocalStorageUtils from "../utilities/LocalStorageUtils";
import actions from "../redux/actions";
import { useEffect } from "react";
const UserLayout = () => {

  const navigate = useNavigate();
  useEffect(() => {
    const verifyLogin = async () =>{
      const authToken = LocalStorageUtils.getItem("authToken");
       return await actions.verifyLoginUser(authToken).catch((error) => {
          console.log("resresres",error.code);
          if(error.code === "ERR_NETWORK"){
            navigate("/NetworkErr");
          }
          // if(error.code === "ERR_NETWORK"){

          // }
       });
    }
    verifyLogin();
  }, [navigate]);
    return <Outlet />
}

export default UserLayout