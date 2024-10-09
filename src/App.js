import styles from "./App.module.scss";
import Login from "./components/Login";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <Login />
    </div>
  );
}

export default App;
