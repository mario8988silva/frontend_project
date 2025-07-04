import useToggle from "../hooks/useToggle";


const Header = () => {

    const { isActive, toggle, close } = useToggle();

    return (
        <header
            id="headerNav"
            className={`${isActive ? "openedHeader" : "closedHeader"}`}
        >
            <a href="#" className="logo" onClick={close}>Ø</a>

            <ul className={`navMenu ${isActive ? "open" : "closed"}`}>

                <li><a href="#ProjectsMain" className="btn" onClick={close}>projects</a></li>
                <li><a href="#servicesAndPath" className="btn" onClick={close}>about</a></li>
                <li><a href="#valuesAndMethods" className="btn" onClick={close}>values & methods</a></li>
                <li><a href="#footer" className="btn" onClick={close}>contact</a></li>
            </ul>

            <ul className="headerMenuToogle">
                <li>
                    <button onClick={toggle} className="navOpen">
                        <span className="icon material-symbols-outlined ">{isActive ? "close" : "menu"}</span>
                    </button>
                </li>
            </ul>
        </header>
    )
}

export default Header;