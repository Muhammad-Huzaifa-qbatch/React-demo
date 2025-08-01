// import React from 'react'
import { NavLink } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <div>
//       <nav className ="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
//         <div className ="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <NavLink to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
//           <img src="https://flowbite.com/docs/images/logo.svg" className ="h-8" alt="Qbatch Logo" />
//           <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Qbatch</span>
//         </NavLink>


//         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
//           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//             <li>
//               <NavLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/signup" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign Up</NavLink>
//             </li>
//             <li>
//               <NavLink to="/login" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign In</NavLink>
//             </li>
//             <li>
//               <NavLink to="/index" className="block py-2 px-3 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Index</NavLink>
//             </li>
//           </ul>
//         </div>

//         </div>
//       </nav>
//     </div>
//   )
// }

const Navbar = ()=>{
  return(
    <div className="bg-[#121d2d]">
    

      <nav className="text-white">
          <div className="max-w-screen-xl px-4 py-3 mx-auto">
              <div className="flex items-center justify-between">
                  <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                      <li>
                        <NavLink to="/"><img className='h-8 w-12' src='/images/topLogo.png'/></NavLink>
                      </li>
                      <li>
                          <a href="#" className="dark:text-white hover:underline" aria-current="page">Pricing</a>
                      </li>
                      <li>
                          <a href="#" className="dark:text-white hover:underline">About</a>
                      </li>
                      <li>
                          <a href="#" className="dark:text-white hover:underline">Blog</a>
                      </li>
                      <li>
                          <a href="#" className="dark:text-white hover:underline">Wall of Love</a>
                      </li>
                      <li className="relative group">
                      <button className="dark:text-white hover:underline">
                        Resources
                        <svg className="inline" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m6 9 6 6 6-6"/>
                        </svg>
                      </button>

                        <ul className="absolute hidden group-hover:block bg-white text-black dark:bg-gray-800 dark:text-white mt-2 rounded shadow-md">
                          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Docs</a></li>
                          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Guides</a></li>
                          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">API</a></li>
                          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Community</a></li>
                          <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Support</a></li>
                        </ul>
                      </li>

                      {/* <li>
                          <a href="#" className="dark:text-white hover:underline">Resources</a>
                      </li> */}

                  </ul>

                  <ul className="flex flex-row font-medium mt-0 space-x-4 text-sm">
                    <li>
                      <NavLink to="/signin" className="dark:text-white hover:underline">Sign in</NavLink>
                    </li>
                    <li>
                      <a href="#" className="dark:text-white hover:underline">Request Demo</a>
                    </li>
                  </ul>
              </div>
          </div>
      </nav>

    </div>
  )
}

export default Navbar
