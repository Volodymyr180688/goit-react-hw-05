import { useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
import { fetchSearchMovie } from '../../api-TMDB';
import SearchBar from '../../components/SearchBar/SearchBar';
import Loader from '../../components/Loader/Loader';
import toast from 'react-hot-toast';
import style from './MoviesPage.module.css';
import MoviesList from "../../components/MoviesList/MoviesList";

export default function MoviesPage() {    
    const [searchParams, setSearchParams] = useSearchParams();
    const movieName = searchParams.get('movieName') ?? '';
    const [moviesList, setMoviesList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    

    

    useEffect(() => {
        if (!movieName) return;
        setMoviesList([]);
        setLoading(true);
        const getMovieSearch = async (movieName) => {
            try {
                const data = await fetchSearchMovie(movieName);
                if (!data.results.length && formSubmitted) { 
                    toast.error('There are no movies with this request. Please, try again');
                    return;
                }
                setMoviesList(data.results);
            } catch (error) {
                toast.error("Whoops. Something went wrong! Please try reloading this page!");
            } finally {
                setLoading(false);
            }
        };
        getMovieSearch(movieName);
    }, [movieName, formSubmitted]);

    const handleSubmit = e => {
        e.preventDefault();
        const searchForm = e.currentTarget;
        const newMovieName = searchForm.elements.movieName.value.trim();
        if (!newMovieName) {
            toast.error('Please enter a keyword!');
            return;
        }
        setSearchParams({ movieName: newMovieName });
        searchForm.reset();
        setFormSubmitted(true);

    }

    return (
        <div className={style.container}>
            <SearchBar onSubmit={handleSubmit} />
            {loading && <Loader />}
            <MoviesList movies={moviesList} />
        </div>
    );
}