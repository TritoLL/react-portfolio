import "../styles/acnh.css";
import { useEffect } from "react";
import Header from "../school/wd2-react-assignment/src/components/Header";
import Footer from "../school/wd2-react-assignment/src/components/Footer";
import SearchForm from "../school/wd2-react-assignment/src/components/SearchForm";

export default function ACNHPage() {
    useEffect(() => {
        document.title = "ACNH Critter Info";
    }, []);

    return (
        <main className="App">
            <Header />
            <SearchForm />
            <Footer />
        </main>
    );
}
