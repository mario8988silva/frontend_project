import { useLocation, useNavigate } from "react-router-dom";
import useToggle from "../hooks/useToggle";

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
      <a href="#" className="logo" onClick={close}>
        Ø
      </a>

      <ul className={`navMenu ${isActive ? "open" : "closed"}`}>
        <li>
          <button
            onClick={() => handleNavClick("ProjectsMain")}
            className="btn"
          >
            projects
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("servicesAndPath")}
            className="btn"
          >
            about
          </button>
        </li>
        <li>
          <button
            onClick={() => handleNavClick("valuesAndMethods")}
            className="btn"
          >
            values & methods
          </button>
        </li>
        <li>
          <button onClick={() => handleNavClick("footer")} className="btn">
            contact
          </button>
        </li>
      </ul>

      <ul className="headerMenuToogle">
        <li>
          <button onClick={toggle} className="navOpen">
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
