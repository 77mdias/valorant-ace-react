import { createBrowserRouter } from "react-router-dom";

import RootLayout from "./screens/RootLayout";
import Home from "./screens/Home";
import Profile from "./screens/Profile/Profile";
import Agents from "./screens/Agents/Agents";
import AgentDetails from "./screens/Agents/AgentDetails";
import Functions from "./screens/Functions/Functions";
import Maps from "./screens/Maps/Maps";
import Settings from "./screens/Settings/Settings";
import Progress from "./screens/Progress/Progress";
import { loadAgentsList, loadAgentDetails } from "./loaders/agents";
import FavPage from "./screens/FavPage/FavPage";
import { loadMapsList } from "./loaders/maps";

const router = createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [{
            index: true,
            element: <Home />,
        },
        {
            path: "/profile",
            element: <Profile />,
        },
        {
            path: "/agents",
            element: <Agents />,
            loader: loadAgentsList,
        },
        {
            path: "/agents/:agentId",
            element: <AgentDetails />,
            loader: loadAgentDetails,
        },
        {
            path: "/functions",
            element: <Functions />,
        },
        {
            path: "/maps",
            element: <Maps />,
            loader: loadMapsList,
        },
        {
            path: "/settings",
            element: <Settings />,
        },
        {
            path: "/progress",
            element: <Progress />,
        },
        {
            path: "/favorites",
            element: <FavPage />,
        },
    ],
}]);

export default router;