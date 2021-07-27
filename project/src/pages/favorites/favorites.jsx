import React, {useEffect} from 'react';
import FavoritesList from '../../components/favorites-list/favorites-list.jsx';
import {useSelector, useDispatch} from 'react-redux';
import {selectFavoriteStatus} from '../../store/reducer/app-data/selectors.js';
import Loading from '../../components/loading/loading.jsx';
import {fetchFavorite} from '../../store/actions/api-actions.js';
import Layout from '../../layout/layout.jsx';

function Favorites() {
  const favoriteStatus = useSelector(selectFavoriteStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorite());
  }, [dispatch]);

  if (favoriteStatus.isLoading) {
    return (
      <Loading/>
    );
  }

  return (
    <Layout>
      <div className="page__favorites-container container">
        <FavoritesList/>
      </div>
    </Layout>
  );
}

export default Favorites;
