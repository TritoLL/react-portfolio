import React from "react";
import AboutMe from "../components/AboutMe";
import AboutThis from "../components/AboutThis";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";

const Home = () => {
    return (
        <>
            <Header />
            <AboutMe />
            <Projects />
            <Education />
            <AboutThis />
            <Footer />
        </>
    );
};

export default Home;
