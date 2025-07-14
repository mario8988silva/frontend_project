import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <main className="errorPage">
            <section>
                <h1>404</h1>
                <p>Sorry, but it seem that something went wrong...</p>
                <Link to="/" className="btn">Return to Main Page</Link>
            </section>
        </main>
    )
}

export default ErrorPage;