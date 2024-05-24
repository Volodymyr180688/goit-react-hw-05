import { useEffect, useState } from "react";
import {fetchTrendMovies} from '../../api-TMDB'
import toast, { Toaster } from "react-hot-toast";
import Loader from '../../components/Loader/Loader'
// import MoviesList from '../../components/MoviesList/MoviesList'

export default function HomePage() {
    const [trendMovies, setTrendMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function getTrendMovies() {
            try {
                setLoading(true);
                const data = await fetchTrendMovies();
                setTrendMovies(data.results);
                console.log(data.results);
                setLoading(false);
            } catch (error) {
                toast.error("Whoops. Something went wrong! Please try reloading this page!");
            } finally {
                setLoading(false);
            }
        }
            getTrendMovies();

    }, [])
    return (
        <div>
            <h1>Trending today</h1>
            {loading && <Loader />}
            {/* <MoviesList trendMovies={trendMovies} /> */}
        <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
}