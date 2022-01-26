import axios from 'axios';
import { Dispatch } from 'react';

import { DataActionTypes } from '../../types/types';
import { CatsAction } from './../../types/types';

export const getData = () => async (dispatch: Dispatch<CatsAction>) => {
  try {
    const res = await axios.get('https://api.thecatapi.com/v1/breeds');

    dispatch({
      type: DataActionTypes.FETCH_DATA,
      payload: res.data.slice(0, 12),
    });
  } catch (error) {
    dispatch({
      type: DataActionTypes.FETCH_DATA_ERROR,
      payload: 'Не удалось загрузить котеек',
    });
  }
};
