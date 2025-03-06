// import { useEffect, useRef, useState,useContext } from "react";
// import { useNavigate } from "react-router-dom"; // Uncomment if using React Router
// import { AuthContext } from "../../context/AuthContext";



// // Avatar with dropdown menu
// const AvatarMenu = () => {
//   const [state, setState] = useState(false);
//   const profileRef = useRef();

//   const navigation = [
//     { title: "Dashboard", path: "/dashboard" },
//     { title: "Analytics", path: "/analytics" },
//     { title: "Profile", path: "/profile" },
//     { title: "Settings", path: "/settings" },
//   ];

  

//   useEffect(() => {
//     const handleDropDown = (e) => {
//       if (profileRef.current && !profileRef.current.contains(e.target)) {
//         setState(false);
//       }
//     };
//     document.addEventListener("click", handleDropDown);
//     return () => document.removeEventListener("click", handleDropDown);
//   }, []);

//   return (
//     <div className="relative border-t lg:border-none ">
//       <button
//         ref={profileRef}
//         className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
//         onClick={() => setState(!state)}
//       >
//         <img
//           src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
//           className="w-full h-full rounded-full"
//         />
//       </button>
//       <ul
//         className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
//           state ? "" : "lg:hidden"
//         }`}
//       >
//         {navigation.map((item, idx) => (
//           <li key={idx}>
//             <a
//               className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3"
//               href={item.path}
//             >
//               {item.title}
//             </a>
//           </li>
//         ))}
//         <button className="block w-full text-justify text-gray-600 hover:text-gray-900 border-t py-3 lg:hover:bg-gray-50 lg:p-3"
//           onClick={() => {
//             logout(); // Log out on button click
//           }}
//         >
//           Logout
//         </button>
//       </ul>
//     </div>
//   );
// };

// export const Header = () => {
//   const [state, setState] = useState(false);
//   const navigate = useNavigate(); // Use React Router for navigation
//   const { auth, logout } = useContext(AuthContext);
//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   const navigation = auth.isAuthenticated
//     ? [
//         { title: "Sign Out", path: "/signin", action: logout },  // Sign Out will trigger logout
        
//       ]
//     : [
//         { title: "Sign In", path: "/signin" },
      
//       ];

//   const submenuNav = [
//     { title: "Dashboard", path: "/dashboard" },
//     { title: "Stock", path: "/products" },
//     { title: "Products", path: "/products" },
//     { title: "Sales", path: "/sales" },
//     { title: "Transactions", path: "/transactions" },
//     { title: "Support", path: "/support" },
//   ];

//   return (
//     <header className="text-base lg:text-sm bg-[#5B7C99]">
//       <div
//         className={`bg-gray items-center gap-x-14 px-4 max-w-screen-xl mx-auto lg:flex lg:px-8 lg:static ${
//           state ? "h-full fixed inset-x-0" : ""
//         }`}
//       >
//         <div className="flex items-center justify-between py-3 lg:py- lg:block">
//           <a href="/">
//             {/* <img
//               // src="https://www.floatui.com/logo.svg"
//               src={UntitledImage}
//               width={120}
//               height={20}
//               alt="Float UI logo"
//             /> */}
//             <h2 className="text-2xl">OneShop</h2>
//           </a>
//           <div className="lg:hidden">
//             <button
//               className="text-gray-500 hover:text-gray-800"
//               onClick={() => setState(!state)}
//             >
//               {state ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 24 24"
//                   fill="currentColor"
//                   className="w-6 h-6"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//         <div
//           className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen  lg:block lg:overflow-visible lg:pb-0 lg:mt-0 lg:ml-[55%] ${
//             state ? "" : "hidden"
//           }`}
//         >
//           <ul className="items-center space-y-6 lg:flex cursor-pointer  lg:space-x-12 lg:space-y-0 lg:text-base text-[#968CFB] ">
          
//             {navigation.map((item, idx) => (
//               <li key={idx}>
//                 <button
//                   onClick={() => handleNavigation(item.path)}
//                   className="block text-gray-900 hover:text-gray-900 cursor-pointer hover:scale-110 font-bold text-[#968CFB] border-r-3 px-2"
//                 >
//                   {item.title}
//                 </button>
//               </li>
//             ))}
//              {auth.isAuthenticated && <AvatarMenu />}
//           </ul>
//         </div>
//       </div>
//       {auth.isAuthenticated && (
//         <nav className="border-b-2">
//           <ul className="flex items-center gap-x-3 max-w-screen-xl font-bold mx-auto px-4 overflow-x-auto lg:px-2 lg:ml-4 t">
//             {submenuNav.map((item, idx) => (
//               <li
//                 key={idx}
//                 className={`py-1 ${
//                   idx === 0 ? "border-b-4 border-indigo-600" : ""
//                 } lg:mr-20`}
//               >
//                 <button
//                   onClick={() => handleNavigation(item.path)}
//                   className="block py-2 px-3 rounded-lg text-white hover:text-gray-900 hover:bg-gray-100 duration-150  hover:scale-110 cursor-pointer"
//                 >
//                   {item.title}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// };
