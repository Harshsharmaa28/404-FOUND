import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./hooks/useScrollToTop";

import About from "./pages/AboutUs/About";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Scholarship from "./pages/Scholarship/Scholarship";
import Mentors from "./pages/Mentors/Mentors";
import SignIn from "./pages/Auth/SignIn";
import Signup1 from "./pages/Auth/Signup1";
import Signup2 from "./pages/Auth/Signup2";
import Faqs from "./pages/faqs/Faqs";
import Contact from "./pages/ContactUs/Contact";
import Academics from "./pages/Academics/Academics";
import Feature from "./pages/Features/Feature";
import Notes from "./pages/Notes/Notes";
import Refrences from "./pages/Refrences/Refrences";
import Profile from "./pages/Profile/Profile";
import ProfileRef from "./pages/AuthenticatedRefrence/ProfileRef";
import Navbar from "./components/Navbar/Navbar";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Error from "./pages/Error/Error";


function App() {
  const user = localStorage.getItem("user");
  const links = [
    {
      path: "/about",
      element: <About />,
      id: 1,
    },
    {
      path: "/footer",
      element: <Footer />,
      id: 2,
    },
    // {
    //   path: "/contact",
    //   element: <Contact />,
    //   id: 3,
    // },
    {
      path: "scholarship",
      element: <Scholarship />,
      id: 4,
    },
    {
      path: "/faqs",
      element: <Faqs />,
      id: 5,
    },
    {
      path: "/Mentors",
      element: <Mentors />,
      id: 6,
    },
    {
      path: "/",
      element: <Homepage />,
      id: 7,
    },
    {
      path: "/login",
      element: <SignIn />,
      id: 8,
    },
    {
      path: "/signup1",
      element: <Signup1 />,
      id: 9,
    },
    {
      path: "/signup2",
      element: <Signup2 />,
      id: 10,
    },
    {
      path: "/features",
      element: <Feature />,
      id: 11,
    },
    {
      path: "/academics",
      element: <Academics />,
      id: 12,
    },
    {
      path: "/notes",
      element: <Notes />,
      id: 13,
    },
    {
      path: "/refrences",
      element: <Refrences />,
      id: 14,
    },
    {
      path: "/profile",
      element: <Profile />,
      id: 15,
    },
    {
      path: "/profileref",
      element: <ProfileRef />,
      id: 15,
    },
    {
      path: '/password/reset',
      element: <ForgotPassword/>,
      id: 16
    },
    {
      path: '/*',
      element: <Error/>,
      id: 17
    }
  ];

  return (
    <div>
      <ScrollToTop/>
        <Routes>
          {links.map(({ path, element, id }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Routes>
    </div>

  );
}

export default App;
