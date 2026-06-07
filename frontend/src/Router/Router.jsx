import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import MyJobs from "../Pages/MyJobs";
import CreateJob from "../Pages/CreateJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/post-job",
        element: <CreateJob />,
      },
    ],
  },
]);

export default router;