import React from "react";
import AboutMe from "../components/AboutMe";
import AboutThis from "../components/AboutThis";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";

const Home = ({ theme, toggleTheme }) => {
    return (
        <>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <AboutMe />
            <Projects />
            <Education />
            <AboutThis />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default Home;
