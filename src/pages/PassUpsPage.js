import { useEffect } from "react";
import Header from "../school/wd2-react-challenge/src/components/Header";
import MainHeader from "../components/Header";
import Footer from "../school/wd2-react-challenge/src/components/Footer";
import SearchForm from "../school/wd2-react-challenge/src/components/SearchForm";

const PassUpsPage = ({ theme, toggleTheme }) => {
    useEffect(() => {
        document.title = "Winnipeg Transit Pass-Ups";
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

export default PassUpsPage;
