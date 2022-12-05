import { useState, usestate } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import AboutUs from './pages/aboutus';
import Contact from './pages/contact';
import Home from './pages/HomePage/home';
import SignIn from './pages/SignIn/signIn.js';
import SignUp from './pages/SignUp/signUp.js';
import Dashboard from './pages/Dashboard/dashboard';
// import Footer from './components/Footer/footer'
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = e => {
    setIsLoggedIn(true);
  }



  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/signIn' element={<SignIn />} />
        </Routes>
      </div>

      {/* <div>
        <footer>
          <Footer />
        </footer>
      </div> */}
    </>
  );
}

export default App;
