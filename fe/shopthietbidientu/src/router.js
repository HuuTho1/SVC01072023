import { Route, Routes } from "react-router-dom";

import { ROUTERS } from "./ultils/router";
import Homepage from "./pages/users/homepage";
import MasterLayout from "./pages/users/homepage/theme/masterLayout";
import ProfilePage from "./pages/users/profilePage";


const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            coponent: <Homepage/>,
        },
        {
            path: ROUTERS.USER.PROFILE,
            coponent: <ProfilePage/>,
        },
    ];

    return(
        <MasterLayout>
        <Routes>
            {userRouters.map((item, key) =>(
            <Route key={key} path={item.path} element={item.coponent} />
            ))}                 
        </Routes>
        </MasterLayout>
    );
};

const RouterCustom = () => {
    return renderUserRouter();
};

    export default RouterCustom;