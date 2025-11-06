// import { createBrowserRouter,RouterProvider } from "react-router-dom"
// import ErrorPage from './pages/ErrorPage';
// import PrivateRoute from './routes/PrivateRoute'
// import PublicRoute from './routes/PublicRoute';
// import Applayout from "./LayOut/Applayout";
// import Dashboard from './pages/admin/Dashboard'
// import Appoinment from './pages/admin/Appoinment';
// import DoctorList from './pages/admin/DoctorList';
// import AddDoctor from './pages/admin/AddDoctor';
// import SignIn from "./pages/Account/SignIn";
// import DSignIn from "./pages/Account/DSignIn";
// import { useContext } from "react";
// import { AContextt } from "./contexts/AdminContext";
// import DAppLayOut from "./pages/doctors/LayOut/DAppLayOut";

// function App() {
//   const {adminDoctorToggle} = useContext(AContextt);
//   const router = createBrowserRouter([
//     {
//       path:"/",
//       errorElement:<ErrorPage/>,
//       element:<PrivateRoute>
//         {adminDoctorToggle ?(<Applayout/>):(<DAppLayOut/>)}
//       </PrivateRoute>,
//       children:adminDoctorToggle ? [
//         {
//           path:"/",
//           element:<Dashboard/>
//         },
//          {
//           path:"/appoinment",
//           element:<Appoinment/>
//         },
//          {
//           path:"/addDoctor",
//           element:<AddDoctor/>
//         },
//          {
//           path:"/doctorlist",
//           element:<DoctorList/>
//         },
       
        
        
//       ]:[

//       ]
//     },
//     {
//       path:"/signin",
//       element:<PublicRoute>
//         <SignIn/>
//       </PublicRoute>
//     },
//      {
//       path:"/dsignin",
//       element:<PublicRoute>
//         <DSignIn/>
//       </PublicRoute>
//     },
     
//   ])

//   return <RouterProvider router={router}></RouterProvider>
// }

// export default App


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import Applayout from "./LayOut/Applayout";
import Dashboard from "./pages/admin/Dashboard";
import Appoinment from "./pages/admin/Appoinment";
import DoctorList from "./pages/admin/DoctorList";
import AddDoctor from "./pages/admin/AddDoctor";
import SignIn from "./pages/Account/SignIn";
import DSignIn from "./pages/Account/DSignIn";
import { useContext } from "react";
import { AContextt } from "./contexts/AdminContext";
import DAppLayOut from "./pages/doctors/LayOut/DAppLayOut";
import DDashboard from "./pages/doctors/DDashboard";
import DProfile from "./pages/doctors/DProfile";
import DAppoinment from "./pages/doctors/DAppoinment";

function App() {
  const { adminDoctorToggle } = useContext(AContextt);

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage />,
      element: (
        <PrivateRoute>
          {adminDoctorToggle ? <Applayout /> : <DAppLayOut />}
        </PrivateRoute>
      ),
      children: adminDoctorToggle
        ? [
            {
              path: "/",
              element: <Dashboard />,
            },
            {
              path: "/appoinment",
              element: <Appoinment />,
            },
            {
              path: "/addDoctor",
              element: <AddDoctor />,
            },
            {
              path: "/doctorlist",
              element: <DoctorList />,
            },
          ]
        : [
           {
              path: "/",
              element: <DDashboard />,
            },
            {
              path: "/dprofile",
              element: <DProfile />,
            },
            {
              path: "/dappoinment",
              element: <DAppoinment />,
            },
        ],
    },
    {
      path: "/signin",
      element: (
        <PublicRoute>
          <SignIn />
        </PublicRoute>
      ),
    },
    {
      path: "/dsignin",
      element: (
        <PublicRoute>
          <DSignIn />
        </PublicRoute>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

