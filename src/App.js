import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Dashboard from "./clientSide/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPassword from "./pages/ResetPassword";
import Explore from "./clientSide/utils/Explore";
import Blog from "./clientSide/utils/Blog";
import Ease from "./clientSide/utils/Ease";
import Profile from "./clientSide/page/Profile";
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="/*" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/ease" element={<Ease />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    );
};

export default App;
