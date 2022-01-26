import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getData } from '../../redux/action/asyncAction';

import CardListItem from '../CardListItem/CardListItem';
import Loader from '../Loader/Loader';
import { filterItems } from '../utils/filterItems';
import './CardList.css';

const CardList = () => {
  const dispatch = useAppDispatch();
  const { data, error, loading, filter } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  const items = filterItems(data, filter);
  const visibleItems = items.map((el) => <CardListItem key={el.id} {...el} />);

  if (error) return <h2 className='alert'>{error}</h2>;
  if (loading) return <Loader />;

  return (
    <div className='row mb-5'>
      {visibleItems}
      {!visibleItems.length && <h3 className='alert'>Здесь пока пусто</h3>}
    </div>
  );
};

export default CardList;
