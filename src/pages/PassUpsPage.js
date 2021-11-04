import "../styles/passups.css";
import AutoplayAmbience from "../school/wd2-react-challenge/src/components/AutoplayAmbience";
import Header from "../school/wd2-react-challenge/src/components/Header";
import Footer from "../school/wd2-react-challenge/src/components/Footer";
import SearchForm from "../school/wd2-react-challenge/src/components/SearchForm";

export default function PassUpsPage() {
    return (
        <main className="App">
            <AutoplayAmbience />
            <Header />
            <SearchForm />
            <Footer />
        </main>
    );
}
