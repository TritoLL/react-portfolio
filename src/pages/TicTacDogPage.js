import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

const TicTacDogPage = ({ theme, toggleTheme }) => {
    return (
        <>
            <Header theme={theme} toggleTheme={toggleTheme} />
            tic tac dog goes here...
            <Footer />
            <ScrollToTop />
        </>
    );
};

export default TicTacDogPage;
