import React, { useEffect, useState } from "react"

const Header = () => {
  const links = [
    { label: "home", link: "" },
    { label: "about", link: "" },
    { label: "contact us", link: "" },
  ]

  return (
    <div className="h-15 w-full bg-slate-300 text-slate-700">
      <nav className="h-full w-2/5 flex flex-wrap justify-between items-center">
        {links.map((link, index) => (
          <a
            key={index}
            className="p-7 hover:bg-sky-700 hover:text-cyan-100 capitalize text-lg font-bold font-mono"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default Header
