import { useLocation, useNavigate } from "react-router-dom";

const Logo = ({
  className = "",
  scrollTarget = null,
  shouldNavigateHome = false,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    const scrollToTarget = () => {
      if (scrollTarget === "top" || !scrollTarget) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const section = document.getElementById(scrollTarget);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    };

    if (shouldNavigateHome && location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(scrollToTarget, 100);
    } else {
      scrollToTarget();
    }
  };

  return (
    <button className={`logo ${className}`} onClick={handleClick}>
      Ø
    </button>
  );
};

export default Logo;
