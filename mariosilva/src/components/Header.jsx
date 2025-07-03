import useToggle from "../hooks/useToggle";


const Header = () => {

    const { isActive, toggle, close } = useToggle();


    return (
        <header
            id="headerNav"
            className={`headerNavClass header ${isActive ? "openHeader" : ""}`}
        >

            <a href="#" className="logo">Ø</a>



            <ul className={`navMenu ${isActive ? "open" : "closed"}`}>

                <li><a href="#ProjectsMain" className="btn">projects</a></li>
                <li><a href="#servicesAndPath" className="btn">about</a></li>
                <li><a href="#valuesAndMethods" className="btn">values & methods</a></li>
                <li><a href="#footer" className="btn">contact</a></li>
            </ul>

            <ul className="headerMenuToogle">
                <li>
                    <button onClick={toggle} className="navOpen">
                        <span className="icon material-symbols-outlined ">{isActive ? "close" : "menu"}</span>
                    </button>
                </li>

                {/*}
                <li>
                    <a href="" className="navOpen">
                        <span className="icon material-symbols-outlined">menu</span>
                    </a>
                </li>
                

                <li>
                    <a href="" className="navClose close">
                        <span className="icon material-symbols-outlined ">close</span>
                    </a>
                </li>
                {*/}
            </ul>
        </header>

    )
}

export default Header;