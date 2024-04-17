import "./App.css"
import Cards from "./components/Cards"
import Header from "./components/Header"

function App() {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="page">
        <Cards />
      </div>
    </main>
  )
}

export default App
