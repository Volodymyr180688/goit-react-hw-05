import { Link } from "react-router-dom";
import style from './MovieItem.module.css'

export default function MovieItem({movie}) { 
    const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';
    return (
        <div>
            <Link to={`/${movie.id}`} className={style.container}>
                <img className={style.image}
                    src={movie.poster_path 
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` 
                        : defaultImg}
                    alt="poster"
                />
            </Link>
        </div>
    );
}