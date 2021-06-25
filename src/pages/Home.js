import React from "react";
import About from "../components/About";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";

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
