import { useState } from "react"
import "./App.css"
import Cards from "./components/Cards"
import Header from "./components/Header"
import AppContext from "./AppContext"
import Footer from "./components/Footer"

function App() {
  const [mode, setMode] = useState("dark")
  const activeMode = mode == "dark" ? "dark" : "light"

  return (
    <AppContext.Provider value={{ mode, setMode, activeMode }}>
      <main>
        <header>
          <Header />
        </header>
        <div className="page">
          <Cards />
        </div>
        <Footer />
      </main>
    </AppContext.Provider>
  )
}

export default App
