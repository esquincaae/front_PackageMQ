import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PackageForm from './pages/PackageForm';
import BasicPage from './templates/BasicPage';
import UpdatePackageForm from './pages/UpdatePackageForm';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <BasicPage><Login /></BasicPage>,
  },
  {
    path: "/signup",
    element: <BasicPage><SignUp /></BasicPage>,
  },
  {
    path: "/",
    element: <BasicPage><Home /></BasicPage>,
  },
  {
    path: "/package/create",
    element: <BasicPage><PackageForm /></BasicPage>,
  },
  {
    path: "/package/update",
    element: <BasicPage><UpdatePackageForm /></BasicPage>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
