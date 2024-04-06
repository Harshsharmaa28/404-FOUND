import { Routes, Route } from "react-router-dom";

import About from "./pages/AboutUs/About";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Scholarship from "./pages/Scholarship/Scholarship";
import Mentors from "./pages/Mentors/Mentors";
import SignIn from "./pages/Auth/SignIn";
import Academics from "./pages/Academics/Academics";

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
      path: "/academics",
      element: <Academics/>,
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