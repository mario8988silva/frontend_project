const Footer = () => {
    return(
            <footer id="footer">
        <article>
            <h2>"quote API"</h2>
        </article>      
            
        <address className="">
            <a href="" target="_blank" className="iconTextBtn">
                <span className="icon material-symbols-outlined">mail</span>
                Contact Me
            </a>

            <ul className="socialMediaContainer">
                <li>
                    <a href="" target="_blank" className="iconTextBtn">
                        <img src="" alt="linkedIn" className="icon"/>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank" className="iconTextBtn">
                        <img src="" alt="behance" className="icon"/>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank" className="iconTextBtn">
                        <img src="" alt="instagram" className="icon"/>
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