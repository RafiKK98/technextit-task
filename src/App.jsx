
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Header from "./components/Header"
import AllUsers from "./pages/AllUsers"
import User from "./pages/User"
import Footer from "./components/Footer"
import ErrorPage from "./pages/ErrorPage"

function App() {

  return (
    <>
      <Router>
        <Header />
        <section className="max-w-7xl mx-auto">
          <Routes>
            <Route path="/" element={<AllUsers />} />
            <Route path="/user/:id" element={<User />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </section>
        <Footer />
      </Router>
    </>
  )
}

export default App
