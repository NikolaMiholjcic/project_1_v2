import styles from "./App.module.scss";
import Login from "./components/pages/Login";
import Dashboard from "./components/pages/Dashboard";
import PostNews from "./components/pages/PostNews";
import NewsList from "./components/pages/NewsList";
import GeneralSettings from "./components/pages/GeneralSettings";
import ChangePassword from "./components/pages/ChangePassword";
import Information from "./components/pages/Information";
import Social from "./components/pages/Social";
import Profile from "./components/pages/Profile";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function App() {
  const isAuthenticated = true;
  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" replace />;
  };
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <PrivateRoute element={<Dashboard />} />,
      children: [
        {
          path: "post",
          element: <PostNews />,
        },
        {
          path: "news-list",
          element: <NewsList />,
        },
        {
          path: "profile",
          element: <Profile />,
          children: [
            {
              path: "general",
              element: <GeneralSettings />,
            },
            {
              path: "information",
              element: <Information />,
            },
            {
              path: "social",
              element: <Social />,
            },
            {
              path: "password",
              element: <ChangePassword />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
