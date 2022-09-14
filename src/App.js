import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Layout from './components/Layout';
import Vision from './components/Vision';
import Services from './components/Services';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="vision" element={<Vision/>} />
          <Route path="services" element={<Services/>} />
          <Route path="contactus" element={<ContactUs/>} />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
