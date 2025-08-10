import { useEffect, useState } from "react";
import { getQuote } from "../api/quote";
import footer from "../data/footer.json";
import icons from "../data/icons.json";
import Icon from "./Icon";
import Logo from "./Logo";

const contactLinks = footer.flatMap(
  (block) => block.content?.map((item) => item.target).filter(Boolean) || []
);

const footerLinks =
  footer
    .find((block) => block.container === "address" && block.element === "a")
    ?.content.reduce((acc, { value, target }) => {
      acc[value] = target;
      return acc;
    }, {}) || {};

const Footer = () => {
  const [quote, setQuote] = useState(null);
  useEffect(() => {
    getQuote()
      .then((q) => setQuote(`${q.quote} — ${q.author}`))
      .catch((err) => console.error("Quote fetch failed:", err));
  }, []);

  return (
    <footer id="footer">
      <article
      aria-label="Explore inspirational quotes via Quotable">
        <h2>{quote ? `"${quote}"` : "Loading quote..."}</h2>
      </article>

      <address className={null}>
        <a
          href={`mailto:${footerLinks["Contact Me"]}`}
          target="_blank"
          className="iconTextBtn"
          aria-label="Feel free to contact me via mail"
        >
          <Icon type="fonts-google" value="mail" />
          Contact Me
        </a>

        <ul className="socialMediaContainer">
          {icons
            .filter((icon) => icon.category === "contact")
            .map(({ id, label, type, value, viewBox, path }) => (
              <li key={id}>
                <a
                  href={footerLinks[label] || "#"}
                  target="_blank"
                  className="iconTextBtn"
                  aria-label={`Link to my ${label} profile for professional information`}
                >
                  <Icon
                    type={type}
                    value={value}
                    label={label}
                    viewBox={viewBox}
                    path={path}
                  />
                </a>
              </li>
            ))}
        </ul>
      </address>

      <div className="logoContainer">
        <Logo 
        scrollTarget="top" 
        shouldNavigateHome={true} aria-label="Link to homepage represented by site logo symbol Ø"
        />
        <aside aria-label="Timestamp marking the site’s 2025 edition">2025</aside>
      </div>
    </footer>
  );
};

export default Footer;
