import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import AboutUs from './pages/aboutus';
import Contact from './pages/contact';
import Home from './pages/home';
import SignIn from './pages/SignIn/signIn.js';
import SignUp from './pages/SignUp/signUp.js';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/signIn' element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
