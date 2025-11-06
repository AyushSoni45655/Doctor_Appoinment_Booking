import { createBrowserRouter,RouterProvider } from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import AppLayOut from "./LayOut/AppLayOut"
import Alldoctors from './pages/Alldoctors'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import SignUp from "./pages/Account/SignUp"
import SignIn from "./pages/Account/SignIn"
import ForgotPassword from "./pages/ForgotPassword"
import DetailsPage from "./pages/Account/DetailsPage"
import PublicRoute from "./routes/PublicRoute"
import PrivateRoute from "./routes/PrIvateRoute"
import Profile from "./pages/Profile"
import Appoinment from "./pages/Appoinment"
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      errorElement:<ErrorPage/>,
      element:<PrivateRoute>
        <AppLayOut/>
      </PrivateRoute>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
         {
          path:"/allDoctors",
          element:<Alldoctors/>
        },
         {
          path:"/contact",
          element:<Contact/>
        },
         {
          path:"/about",
          element:<About/>
        },
         {
          path:"/allDoctors/:id",
          element:<DetailsPage/>
        },
         {
          path:"/profile",
          element:<Profile/>
        },
         {
          path:"/appoinment",
          element:<Appoinment/>
        },
        
        
      ]
    },
    {
      path:"/signin",
      element:<PublicRoute>
        <SignIn/>
      </PublicRoute>
    },
     {
      path:"/signup",
      element:<PublicRoute>
        <SignUp/>
      </PublicRoute>
    },
    {
          path:"/fPassword",
          element:<PublicRoute>
            <ForgotPassword/>
          </PublicRoute>
     },
  ])

  return <RouterProvider router={router}></RouterProvider>
}

export default App
