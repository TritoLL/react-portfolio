import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import TicTacDog from "../components/TicTacDog";

const TicTacDogPage = ({ theme, toggleTheme }) => {
    return (
        <>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <TicTacDog />
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default TicTacDogPage;
