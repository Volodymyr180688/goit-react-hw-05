import MovieItem from '../MovieItem/MovieItem';
import style from './MoviesList.module.css'


export default function MoviesList({ movies }) { 
    return (
        <ul className={style.container}>
            {movies.map(movie => (
                <li className={style.item} key={movie.id}>
                    <MovieItem movie={movie} /> 
                </li>
            ))}
        </ul>
    );
}