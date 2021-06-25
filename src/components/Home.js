import React from "react";
import About from "./About";
import Education from "./Education";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";

const Home = () => {
    return (
        <>
            <Header />
            <About />
            <Projects />
            <Education />
            <Footer />
        </>
    );
};

export default Home;
