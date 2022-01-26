import { useAppDispatch } from '../../hooks/hooks';
import { CatsData } from '../../types/types';

import Like from '../Like/Like';
import './CardListItem.css';
import { deleteItem } from '../../redux/action/actions';

const CardListItem = ({
  id,
  favorite,
  description,
  name,
  image: { url },
}: CatsData) => {
  const dispatch = useAppDispatch();

  return (
    <div className='col-sm-4 mt-5 d-flex justify-content-center'>
      <div className='card' style={{ width: '18rem', minHeight: '620px' }}>
        <img
          src={url}
          width={240}
          height={240}
          className='card-img-top'
          alt={name}
        />
        <div className='card-body d-flex flex-column'>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text text'>{description}</p>
          <div className='buttons'>
            <button
              onClick={() => dispatch(deleteItem(id))}
              className='btn btn-outline-danger'
            >
              <i className='bi bi-trash'></i>
            </button>
            <Like id={id} favorite={favorite} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListItem;
