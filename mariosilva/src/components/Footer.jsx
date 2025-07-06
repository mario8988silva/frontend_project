import { useEffect, useState } from "react";
import { getQuote } from "../api/quote";
import footer from '../data/footer.json';
import icons from '../data/icons.json';

const contactLinks = footer.flatMap(block =>
    block.content?.map(item => item.target).filter(Boolean) || []
);

const footerLinks = footer
    .find(block => block.container === "address" && block.element === "a")
    ?.content.reduce((acc, { value, target }) => {
        acc[value] = target;
        return acc;
    }, {}) || {};



const Footer = () => {

    const [quote, setQuote] = useState(null);
    useEffect(() => {
        getQuote()
            .then(q => setQuote(`${q.quote} — ${q.author}`))
            .catch(err => console.error("Quote fetch failed:", err));
    }, []);


    return (
        <footer id="footer">
            <article>
                <h2>{quote ? `"${quote}"` : "Loading quote..."}</h2>
            </article>

            <address className={null} >
                <a 
                href={`mailto:${footerLinks["Contact Me"]}`}
                target="_blank" 
                className="iconTextBtn"
                >
                    <span 
                    className="icon material-symbols-outlined">mail</span>
                    Contact Me
                </a>

                <ul className="socialMediaContainer">
                    {icons
                    .filter(icon => icon.category === "contact")
                    .map(({ id, label, value }) => (
                        <li key={id}>
                            <a 
                            href={footerLinks[label] || "#"} 
                            target="_blank" className="iconTextBtn">
                                <img 
                                src={value} 
                                alt={label} className="icon" 
                                />
                            </a>
                        </li>
                    ))}
                    
                </ul>
            </address>

            <div className="logoContainer">
                <a href="#" className="logo">Ø</a>
                <aside>2025</aside>
            </div>
        </footer>
    )
}

export default Footer;