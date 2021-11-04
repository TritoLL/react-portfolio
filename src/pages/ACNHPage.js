import "../styles/acnh.css";
import Header from "../school/wd2-react-assignment/src/components/Header";
import Footer from "../school/wd2-react-assignment/src/components/Footer";
import SearchForm from "../school/wd2-react-assignment/src/components/SearchForm";

export default function ACHNPage() {
    return (
        <main className="App">
            <Header />
            <SearchForm />
            <Footer />
        </main>
    );
}
