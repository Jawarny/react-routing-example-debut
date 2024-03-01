import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Users from "../Containers/Users";
import UserTasks from "../Containers/UserTasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Users /> },
      { path: "/users", element: <Users /> },
      { path: "/tasks", element: <Tasks /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
