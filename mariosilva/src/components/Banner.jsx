import {getGreetings } from "../app/greetings";


const Banner = ({ title, descritpion, bgImage, currentPath }) => {
    const message = getGreetings();

    return (
        <section
            className={`banner ${bgImage ? "bannerProject" : "bannerMain"}`}
            style={bgImage ? {backgroundImage: `url(${bgImage})`} : {}}
        >
            <article className="bannerGreetings">
                <h1>{title || message}</h1>
                <p>{descritpion || "Welcome to my little corner of the web — a collection of projects I’ve crafted over the past few years."}</p>

                <aside className="currentPath">{currentPath || "main page"}</aside>
            </article>
        </section>
    )
}

/*
const Banner = () => {
    const message = getGreetings();

    return (       

        <section className="banner bannerMain">

            <article className="bannerGreetings">
                <h1>{message}</h1>
                <p>Welcome to my little corner of the web — a collection of projects I’ve crafted over the past few years.</p>
            </article>

            <article>
                <aside className="currentPath">main page</aside>
            </article>
        </section>
    )    
}
*/


export default Banner;