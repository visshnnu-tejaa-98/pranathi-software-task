import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import store from "./redux/store";
import { Provider } from "react-redux";
import Home from "./screens/Home";
import AddEntry from "./screens/AddEntry";
import UserTable from "./screens/UserTable";
import EditEntry from "./screens/EditEntry";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/table",
        element: <UserTable />,
      },
      {
        path: "/addEntry",
        element: <AddEntry />,
      },
      {
        path: "/editEntry/:id",
        element: <EditEntry />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
