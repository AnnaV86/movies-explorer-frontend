import { useEffect, useState } from 'react';
import { Footer } from '../Footer/Footer';
import { Preloader } from '../Preloader/Preloader';
import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import './Movies.css';
import { Header } from '../Header/Header';
import { getMoviesListFetch } from '../../utils/MoviesApi';
import { NOT_FOUND_MESSAGE } from '../../constants/index';
import { filterArray } from '../../utils/filterArray';
export const Movies = ({ login, onClickSaveMovie, openPopupsMessage }) => {
  const [preloaderOpen, setPreloaderOpen] = useState(false);
  const [filteredArrayMovies, setFilteredArrayMovies] = useState([]);
  const [isRender, setIsRender] = useState(true);

  const onClickRequestArray = async (searchData) => {
    setPreloaderOpen(true);
    const arrayAllMovies = localStorage.getItem('arrayAllMovies');
    if (!arrayAllMovies) {
      const allMovies = await getMoviesListFetch();
      localStorage.setItem('arrayAllMovies', JSON.stringify(allMovies));
    }
    localStorage.setItem('searchText', searchData.text);
    localStorage.setItem('shortFilter', searchData.short);
    const arraySearch = filterArray();
    return renderArray(arraySearch);
  };

  const renderArray = (array) => {
    if (array.length === 0) {
      openPopupsMessage(NOT_FOUND_MESSAGE);
    } else {
      setFilteredArrayMovies(array);
    }
    setIsRender(true);
    return setPreloaderOpen(false);
  };

  useEffect(() => {
    const arrayAllMovies = localStorage.getItem('arrayAllMovies');
    if (!arrayAllMovies) {
      setIsRender(false);
      return;
    }
    const arraySearch = filterArray();
    setIsRender(true);
    renderArray(arraySearch);
  }, []);

  return (
    <>
      <Header login={login} />
      <main className='movies'>
        <SearchForm
          onClickRequestArray={onClickRequestArray}
          openPopupsMessage={openPopupsMessage}
          type={'allMovies'}
        />
        {preloaderOpen ? (
          <Preloader />
        ) : (
          isRender && (
            <MoviesCardList
              arrayMovie={filteredArrayMovies}
              type={'all'}
              onClickButtonMovie={onClickSaveMovie}
            />
          )
        )}
      </main>
      <Footer />
    </>
  );
};
