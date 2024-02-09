
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from "./components/Header"
import AllUsers from "./pages/AllUsers"
import User from "./pages/User"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto">
        <Router>
          <Routes>
            <Route path="/" element={<AllUsers/>} />
            <Route path="/user/:id" element={<User />} />
          </Routes>
        </Router>
      </section>
      <Footer />
    </>
  )
}

export default App
