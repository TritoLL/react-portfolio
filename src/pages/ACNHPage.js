import { useEffect } from "react";
import Header from "../school/wd2-react-assignment/src/components/Header";
import MainHeader from "../components/Header";
import Footer from "../school/wd2-react-assignment/src/components/Footer";
import SearchForm from "../school/wd2-react-assignment/src/components/SearchForm";

const ACNHPage = ({ theme, toggleTheme }) => {
    useEffect(() => {
        document.title = "ACNH Critter Info";
    }, []);

    return (
        <>
            <MainHeader theme={theme} toggleTheme={toggleTheme} />
            <main className="App">
                <Header />
                <SearchForm />
                <Footer />
            </main>
        </>
    );
};

export default ACNHPage;
