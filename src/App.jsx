import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MovieDetailsModal from "./components/MovieDetailsModal";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

export default function App() {
    return (
        <>
            <Navbar>navbar</Navbar>
            <Hero></Hero>
            <div className="bg-black">
                <MovieList></MovieList>
                <MovieList></MovieList>
                <MovieList></MovieList>
                <MovieList></MovieList>
                <Footer></Footer>
            </div>
        </>
    );
}
