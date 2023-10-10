import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [fade, setFade] = useState(false);

    const handleMouseOver = () => {
        // Preload Service B on hover
        const preloadLink = document.createElement("link");
        preloadLink.href = "http://localhost:4000";
        preloadLink.rel = "prefetch";
        document.head.appendChild(preloadLink);
    };

    const handleClick = (event) => {
        event.preventDefault();
        setFade(true);

        // After the animation completes, navigate to Service B
        setTimeout(() => {
            window.location.href = "http://localhost:4000";
        }, 500); // Match this duration with the CSS animation duration
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <div className="flex-grow-1">
                {/* Your main content goes here */}
                <div className={`App ${fade ? 'fade-out' : ''}`}>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">Your Brand</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="http://localhost:4000"
                                        onMouseOver={handleMouseOver}
                                        onClick={handleClick}
                                    >
                                        Go to Data Prime
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <h1>from data web ui</h1>
                </div>
            </div>

            <footer className="footer mt-auto py-3 bg-dark">
                <div className="container">
                    <span className="text-muted">Your Shared Footer Content Here.</span>
                </div>
            </footer>
        </div>


    );
}

export default App;
