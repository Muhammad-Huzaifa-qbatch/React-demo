// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Login from './components/Signin'
import Home from './components/Home'
import IndexPage from './components/IndexPage'


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><IndexPage/></>

    },
    {
      path: '/signup',
      element: <div><Navbar /><Signup/></div>

    },
    {
      path: '/login',
      element: <><Navbar/><Login/></>
    },
    {
      path: '/index',
      element: <><Navbar/><IndexPage/></>
    },

  ])
  return (
    <>
      <RouterProvider router={router} />
    </> 
  )
}

export default App












//   return (
//     <>
//       <SignupForm />
//       <StatefulLoginForm />
//     </>
//   )
// }


