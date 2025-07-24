import {getGreetings } from "../app/greetings";


const Banner = ({ title, description, bgImage, currentPath }) => {
    const message = getGreetings();

    return (
        <section
            className={`banner ${bgImage ? "bannerProject" : "bannerMain"}`}
            style={bgImage ? {backgroundImage: `url(${bgImage})`} : {}}
        >
            <article className="bannerGreetings">
                <h1>{title || message}</h1>
                <p>{description || "Welcome to my little corner of the web — a collection of projects I’ve crafted over the past few years."}</p>

                <aside className="currentPath">{currentPath || "main page"}</aside>
            </article>
        </section>
    )
}


export default Banner;