import useToggle from "../hooks/useToggle";

const Header = () => {
    return (

        <header id="headerNav" className="headerNav">

            <a href="#" className="logo">Ø</a>

            <ul className="navMenu">
                <li><a href="#filters" className="btn">projects</a></li>
                <li><a href="#servicesAndPath" className="btn">about</a></li>
                <li><a href="#valuesAndMethods" className="btn">values & methods</a></li>
                <li><a href="#footer" className="btn">contact</a></li>
            </ul>

            <ul className="headerMenuToogle">
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
            </ul>
        </header>

    )
}

export default Header;