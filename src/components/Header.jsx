import React, { useContext } from "react"
import useScreenSize from "./custom-hooks/useScreenSize"
import AppContext from "../AppContext"
import Logo from "../assets/Mo.png"

const Header = () => {
  const { mode, setMode, activeMode } = useContext(AppContext)
  const links = [
    { label: "home", link: "" },
    { label: "about", link: "" },
    { label: "contact us", link: "" },
  ]
  const screen = useScreenSize()
  const { width, height } = screen
  const screenType = getScreenType(width)

  function getScreenType(width) {
    if (width < 576) {
      return "sm"
    } else if (width < 720) {
      return "md"
    } else {
      return "lg"
    }
  }

  if (screenType == "lg" || screenType == "md")
    return (
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links.map((link, index) => (
                <li
                  key={index}
                  className="py-2.5 px-3 hover:bg-sky-700 hover:text-cyan-100 capitalize text-lg font-bold font-mono "
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="navbar-center hover:text-sky-700">MOVIES SHOWCASE</div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
      // <div className={`${activeMode}`}>
      //   <div className="h-12 w-full bg-slate-300 dark:bg-slate-900 text-slate-50 flex flex-wrap justify-between items-center">
      //     <div className="logo w-1/4 flex">
      //       <img src={Logo} className="h-10 w-16 rounded-l-lg bg-slate-900" />
      //       <div className="h-10 w-16 rounded-r-lg capitalize font-bold dark:bg-slate-50 text-slate-900 text-xs">
      //         movies showcase
      //       </div>
      //     </div>
      //     <nav className="h-full w-2/4 flex flex-wrap justify-between items-center">
      //       {links.map((link, index) => (
      //         <a
      //           key={index}
      //           className="py-2.5 px-3 hover:bg-sky-700 hover:text-cyan-100 capitalize text-lg font-bold font-mono "
      //         >
      //           {link.label}
      //         </a>
      //       ))}
      //     </nav>
      //     <div className="w-1/4">
      //       <span
      //         className={
      //           activeMode == "dark"
      //             ? "fa fa-moon-o dark:text-slate-50"
      //             : "fa fa-sun-o dark:text-slate-900"
      //         }
      //         onClick={() =>
      //           setMode((prev) => (prev == "dark" ? "light" : "dark"))
      //         }
      //       ></span>
      //     </div>
      //   </div>
      // </div>
    )
  else if (screenType == "sm") return "mobile view"
}

export default Header
