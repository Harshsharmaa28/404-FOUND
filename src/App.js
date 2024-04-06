import { Routes, Route } from "react-router-dom";

import About from "./pages/AboutUs/About";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Scholarship from "./pages/Scholarship/Scholarship";
import Mentors from "./pages/Mentors/Mentors";
import SignIn from "./pages/Auth/SignIn";
import Signup1 from "./pages/Auth/Signup1";
import Signup2 from "./pages/Auth/Signup2";
import Faqs from "./pages/faqs/Faqs";

function App() {
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
  ];
  return (
    <div>
      <Routes>
        {links.map(({ path, element, id }) => (
          <Route key={id} path={path} element={element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
