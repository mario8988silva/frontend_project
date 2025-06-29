import {getGreetings } from "../app/greetings";

const Banner = () => {
    const message = getGreetings();

    return (       

        <section className="banner">

            <article>
                <h1>{message}</h1>
                <p>Welcome to my little corner of the web — a collection of projects I’ve crafted over the past few years.</p>
            </article>

            <article>
                <aside className="currentPath">main page</aside>
            </article>
        </section>
    )

    
}



export default Banner;