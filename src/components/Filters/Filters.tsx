import { useAppDispatch } from '../../hooks/hooks';

import { changeFilter } from '../../redux/action/actions';

const Filters = () => {
  const dispatch = useAppDispatch();

  const buttons = [
    { id: 1, name: 'all', label: 'Все' },
    { id: 2, name: 'liked', label: 'Лайкнутые' },
  ];

  const btns = buttons.map((el) => {
    const clazz = el.name === 'liked' ? 'btn btn-success' : 'btn btn-primary';
    return (
      <button
        onClick={() => dispatch(changeFilter(el.name))}
        key={el.id}
        name={el.name}
        type='button'
        className={clazz}
      >
        {el.label}
      </button>
    );
  });

  return (
    <div
      className='btn-group d-flex justify-content-center mt-5'
      role='group'
      aria-label='Basic mixed styles example'
    >
      {btns}
    </div>
  );
};

export default Filters;
