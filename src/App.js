import { Routes, Route } from "react-router-dom"
import "./index.scss"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"

function App() {
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <Sidebar />
        <main>
          <Routes>
            <Route
              path="/exercise/:id"
              element={ <Main /> }
            />
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
