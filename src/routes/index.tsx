import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home.page.tsx";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    );
};

