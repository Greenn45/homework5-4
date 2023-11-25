import React from 'react';
import Menu from "./Menu/Menu";
import {Route, Routes} from "react-router-dom";
import UserRegisterPage from "./pages/UserRegisterPage/UserRegisterPage";
import UserListPage from "./pages/UserListPage/UserListPage";

const App = () => {
    return (
        <div>
          <Menu />

            <Routes>
                <Route index element={<UserRegisterPage />} />
                <Route path={'/users'} element={<UserListPage />} />
            </Routes>
        </div>
    );
};

export default App;