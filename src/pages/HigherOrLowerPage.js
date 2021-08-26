import React, { useEffect } from "react";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";

const HigherOrLowerPage = ({ theme, toggleTheme }) => {
    useEffect(() => {
        document.title = "Alex Friesen | Higher or Lower";
    }, []);

    return (
        <>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <ScrollToTop />
        </>
    );
};

export default HigherOrLowerPage;
