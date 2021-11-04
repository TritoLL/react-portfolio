import "../styles/passups.css";
import { useEffect } from "react";
import Header from "../school/wd2-react-challenge/src/components/Header";
import Footer from "../school/wd2-react-challenge/src/components/Footer";
import SearchForm from "../school/wd2-react-challenge/src/components/SearchForm";

export default function PassUpsPage() {
    useEffect(() => {
        document.title = "Winnipeg Transit Pass-Ups";
    }, []);

    return (
        <main className="App">
            <Header />
            <SearchForm />
            <Footer />
        </main>
    );
}
