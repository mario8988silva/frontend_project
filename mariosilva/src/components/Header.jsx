import { useLocation, useNavigate } from "react-router-dom";
import useToggle from "../hooks/useToggle";
import Logo from "./Logo";

const Header = () => {
  const { isActive, toggle, close } = useToggle();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (sectionId) => {
    close();

    if (location.pathname !== "/") {
      navigate("/", { replace: false });

      setTimeout(() => {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      section?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="headerNav"
      className={`${isActive ? "openedHeader" : "closedHeader"}`}
    >
      <Logo scrollTarget="top" shouldNavigateHome={true} aria-label="Minimalist logo linking back to home"/>

      <ul className={`navMenu ${isActive ? "open" : "closed"}`}>
        <li>
          <button
            onClick={() => handleNavClick("ProjectsMain")}
            className="btn"
            aria-label="Navigate to the section showcasing featured projects"
          >
            projects
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("servicesAndPath")}
            className="btn"
            aria-label="Navigate to the section sharing background and experience"
          >
            about
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("valuesAndMethods")}
            className="btn"
            aria-label="Navigate to the section outlining design values and working methods"
          >
            values & methods
          </button>
        </li>
        <li>
          <button 
          onClick={() => handleNavClick("footer")} className="btn"
          aria-label="Jump to contact section in the page footer"
            >
            contact
          </button>
        </li>
      </ul>

      <ul className="headerMenuToogle">
        <li>
          <button 
          onClick={toggle} 
          className="navOpen"
          aria-label="Open to access the navigation buttons so you may explore the main page faster"
          >
            <span className="icon material-symbols-outlined ">
              {isActive ? "close" : "menu"}
            </span>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
