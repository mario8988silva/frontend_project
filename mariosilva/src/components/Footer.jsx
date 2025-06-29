const Footer = () => {
    return (
        <footer id="footer">
            <article>
                <h2>"quote API"</h2>
            </article>

            <address className={null} >
                <a href={null}  target="_blank" className="iconTextBtn">
                    <span className="icon material-symbols-outlined">mail</span>
                    Contact Me
                </a>

                <ul className="socialMediaContainer">
                    <li>
                        <a href={null} target="_blank" className="iconTextBtn">
                            <img src={null}  alt="linkedIn" className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href={null}  target="_blank" className="iconTextBtn">
                            <img src={null}  alt="behance" className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href={null}  target="_blank" className="iconTextBtn">
                            <img src={null}  alt="instagram" className="icon" />
                        </a>
                    </li>
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