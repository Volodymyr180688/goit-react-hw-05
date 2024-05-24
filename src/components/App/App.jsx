import { Route, Routes } from 'react-router-dom';
import style from './App.module.css'
import HomePage from '../../pages/HomePage/HomePage';
import MoviesPage from '../../pages/MoviesPage/MoviesPage'
// import MovieDetailsPage from '../../pages/MovieDetailsPage/MovieDetailsPage'
import Navigation from '../Navigation/Navigation';
import { Toaster } from 'react-hot-toast';
// import MovieCast from '../MovieCast/MovieCast'
// import MovieReviews from '../MovieReviews/MovieReviews'



function App() {

  return (<div className={style.container}>
    <Navigation />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/movies' element={<MoviesPage />} />
      {/* <Route path='/movies/:movieId' element={MovieDetailsPage}>
        <Route path='cast' element={MovieCast} />
        <Route path='reviews' element={MovieReviews} />
      </Route> */}
    </Routes>
    <Toaster position="top-right" reverseOrder={false} />
  </div>
  )
}

export default App
