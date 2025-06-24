const ProjectsFilters = () => {
    return(
                <section id="filters" className="filters">           

            <ul>
                <li className="filtersContainer">
                    <h3>fields:</h3>
                    <ul>
                        <li>
                            <button className="iconTextBtn">
                                <span className="icon material-symbols-outlined">kid_star</span>
                                Branding
                            </button>
                        </li>
                        <li>
                            <button className="iconTextBtn">
                                <span className="icon material-symbols-outlined">chat_bubble</span>
                                Communication Design
                            </button>
                        </li>
                        <li>
                            <button className="iconTextBtn">
                                <span className="icon material-symbols-outlined">import_contacts</span>
                                Editorial Design
                            </button>
                        </li>
                        <li>
                            <button className="iconTextBtn">
                                <span className="icon material-symbols-outlined">palette</span>
                                    Illustration
                            </button>
                            </li>
                        <li>
                            <button className="iconTextBtn">
                                <span className="icon material-symbols-outlined">package_2</span>
                                    Packaging
                            </button>
                        </li>
                        <li>
                            <button className="iconTextBtn">
                                <span className="icon material-symbols-outlined">photo_camera</span>
                                Photography
                            </button>
                        </li>
                        <li>
                            <button className="iconTextBtn">
                                <span className="icon material-symbols-outlined">stylus_note</span>
                                UX/UI Design
                            </button>
                        </li>
                        <li>
                            <button className="iconTextBtn">
                                <span className="icon material-symbols-outlined">code</span>
                                Web Development
                            </button>
                        </li>
                    </ul>
                </li> 

                <li>
                    <h3>schools:</h3>
                    <ul>
                        <li>
                            <button>
                                <span className="icon material-symbols-outlined">school</span>
                                IEFP
                            </button>
                        </li>
                        <li>
                            <button>
                                <span className="icon material-symbols-outlined">school</span>
                                Flag
                            </button>
                        </li>
                        <li>
                            <button>
                                <span className="icon material-symbols-outlined">school</span>
                                Edit
                            </button>
                        </li>
                    </ul>
                </li>

                <li>
                    <h3>context:</h3>
                    <ul>
                        <li>
                            <button>
                                <span className="icon material-symbols-outlined">school</span>
                                Academic
                            </button>
                        </li>
                        <li>
                            <button>
                                <span className="icon material-symbols-outlined">badge</span>
                                Internship
                            </button>
                        </li>
                        <li>
                            <button>
                                <span className="icon material-symbols-outlined">work</span>
                                Work
                            </button>
                        </li>
                        <li>
                            <button>
                                <span className="icon material-symbols-outlined">person</span>
                                Side Project
                            </button>
                        </li>
                    </ul>
                </li>                    
            </ul>                
        </section>
    )
}

export default ProjectsFilters;