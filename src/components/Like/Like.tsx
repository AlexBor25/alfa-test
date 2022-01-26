import { useState } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { likedItem } from '../../redux/action/actions';
import './Like.css';

const Like = ({ id, favorite }: { id: string; favorite: boolean }) => {
  const [check, setCheck] = useState(favorite);

  const dispatch = useAppDispatch();

  const onChange = (id: string) => {
    dispatch(likedItem(id));
    setCheck((prev) => !prev);
  };

  return (
    <>
      <input
        onChange={() => onChange(id)}
        type='checkbox'
        id={id}
        checked={check}
      />
      <label htmlFor={id}>Лайк котейке!</label>
    </>
  );
};

export default Like;
