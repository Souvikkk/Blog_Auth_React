import {Routes,Route, useNavigate } from "react-router-dom";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Course from "./components/pages/Course";
import Home from "./components/pages/Home";
import BlogDetails from "./components/pages/BlogDetails";
import CategoryDetails from "./components/pages/CategoryDetails";
import RecentPostDetails from "./components/pages/RecentPostDetails";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import CourseApply from "./components/pages/CourseApply";
import { SearchProvider } from "./components/Contex/SearchContex";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Profile from "./components/pages/Profile";
import SearchPage from "./components/pages/SearchPage";
import { useAuth } from "./components/Contex/AuthContext";



const ProtectedRoute = ({children})=>{
  const token = localStorage.getItem('auth') || sessionStorage.getItem('auth')
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      // Display SweetAlert for 3 seconds
      const alertTimer = setTimeout(() => {
        Swal.fire({
          icon: 'info',
          title: 'You need to login to view this page.',
          // text: 'Redirecting to login page...',
          html: "<span style='color: white;'>Redirecting to login page...</span>",
          timer: 4000,
          showConfirmButton: false,
          customClass: {
            popup: 'custom-popup-class',
            title: 'custom-title-class',
            content: 'custom-content-class',
            confirmButton: 'custom-confirm-button-class',
            cancelButton: 'custom-cancel-button-class',
          
            customClass: {
              popup: 'custom-popup-class',
              title: 'custom-title-class',
              content: 'custom-content-class',
            },
          }
        }).then(() => {
         
          navigate('/login');
        });
      }, 0); 

      // Clear the timer on component unmount
      return () => clearTimeout(alertTimer);
    }
  }, [token, navigate]);

  return token ? children : null;

}


function App() {
const [auth] = useAuth()
 
  const PublicRoute =[
    {
      path :'/',
      component:<Home/>
    },
    {
      path :'/login',
      component: !auth?.user? <Login/> : <Profile/>
    },
    {
      path :'/register',
      component:!auth?.user? <Register/> : <Profile/>
    },
    {
      path :'/about',
      component:<About/>
    },
    {
      path :'/blog',
      component:<Blog/>
    },
    {
      path :'/course',
      component:<Course/>
    },
    {
      path :'/search',
      component:<SearchPage/>
    },
  ]
 
  const PrivateRoute =[
    
    
    {
      path :'/blog',
      component:<Blog/>
    },
    {
      path :'/blogdetails/:id',
      component:<BlogDetails/>
    },
    {
      path :'/categorydetails/:_id',
      component:<CategoryDetails/>
    },
    {
      path :'/recentPostDetails/:_id',
      component:<RecentPostDetails/>
    },
    {
      path :'/course',
      component:<Course/>
    },
    {
      path :'/courseapply/:course/:_id',
      component:<CourseApply/>
    },
    {
      path :'/contact',
      component:<Contact/>
    },
    {
      path :'/profile',
      component:<Profile/>
    },
    {
      path :'/search',
      component:<SearchPage/>
    },
  ]
  return (
    <>
      <Routes>
        {
          PublicRoute.map((route,index)=>{
            return(
              <>
              <Route 
              key={index}
              path={route.path}
              element={<SearchProvider>{route.component} </SearchProvider>}/>
              </>
            )
          })
        }
        {
          PrivateRoute.map((route,index)=>{
            return(
              <>
              <Route
              key={index}
              path={route.path}
              element={<SearchProvider><ProtectedRoute> {route.component} </ProtectedRoute> </SearchProvider>  }/>
              </>
            )
          })
        }
      </Routes>
    </>
  );
}

export default App;
