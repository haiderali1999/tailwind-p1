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
      <div className={`${activeMode}`}>
        <div className="h-12 w-full bg-slate-300 dark:bg-slate-900 text-slate-50 flex flex-wrap justify-between items-center">
          <div className="logo w-1/4 flex">
            <img src={Logo} className="h-10 w-16 rounded-l-lg bg-slate-900" />
            <div className="h-10 w-16 rounded-r-lg capitalize font-bold dark:bg-slate-50 text-slate-900 text-xs">
              movies showcase
            </div>
          </div>
          <nav className="h-full w-2/4 flex flex-wrap justify-between items-center">
            {links.map((link, index) => (
              <a
                key={index}
                className="py-2.5 px-3 hover:bg-sky-700 hover:text-cyan-100 capitalize text-lg font-bold font-mono "
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="w-1/4">
            <span
              className={
                activeMode == "dark"
                  ? "fa fa-moon-o dark:text-slate-50"
                  : "fa fa-sun-o dark:text-slate-900"
              }
              onClick={() =>
                setMode((prev) => (prev == "dark" ? "light" : "dark"))
              }
            ></span>
          </div>
        </div>
      </div>
    )
  else if (screenType == "sm") return "mobile view"
}

export default Header
