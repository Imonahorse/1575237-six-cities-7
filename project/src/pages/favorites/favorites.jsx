import React, {useEffect} from 'react';
import Header from '../../components/header/header.jsx';
import FavoritesList from '../../components/favorites-list/favorites-list.jsx';
import Footer from '../../components/footer/footer.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {selectFavoriteStatus} from '../../store/reducer/user-data/selectors.js';
import Loading from '../../components/loading/loading.jsx';
import {fetchFavorite} from '../../store/actions/api-actions.js';
import {setFavoriteStatus} from '../../store/reducer/app-data/selectors.js';

function Favorites() {
  const favoriteStatus = useSelector(selectFavoriteStatus);
  const sendFavoriteStatus = useSelector(setFavoriteStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorite());
  }, [sendFavoriteStatus]);

  if (favoriteStatus.isLoading) {
    return (
      <Loading/>
    );
  }

  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <FavoritesList />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Favorites;
