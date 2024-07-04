import "./App.css";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Materials from "./pages/materials";
import Resources from "./pages/resources";
import ContactUs from "./pages/contactUs";
import Home from "./pages/home";
import Footer from "./components/footer/Footer";
import QuoteForm from "./pages/quoteForm";
import BackToTopButton from "./components/buttons/BackToTop";
import QuoteCTA from "./components/QuoteCTA";
import Capabilities from "./pages/capabilities";
import BecomePartner from "./pages/partner";
import SingleBlogPost from "./pages/cms/SingleBlogPost";
import Login from "./components/login";
import Signup from "./components/signup";
import Dashboard from "./components/dashboard";
import Profile from "./components/profile";
import ProgresForm from "./pages/progresForm";
function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="main">
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="/blog/:slug" element={<SingleBlogPost />} />
            <Route path="/materials" element={<Materials />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/get-a-quote" element={<QuoteForm />} />
            <Route path="/order" element={<QuoteForm />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/become-a-partner" element={<BecomePartner />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/progresForm" element={<ProgresForm />} />
          </Routes>
        </div>
        <QuoteCTA></QuoteCTA>
        <BackToTopButton></BackToTopButton>
        <Footer></Footer>
      </Router>
    </div>
  );
}
export default App;
