import { DataActionTypes } from '../../types/types';

export const deleteItem = (id: string) => ({
  type: DataActionTypes.DELETE_ITEM,
  payload: id,
});

export const likedItem = (id: string) => ({
  type: DataActionTypes.LIKE_ITEM,
  payload: id,
});

export const changeFilter = (name: string) => ({
  type: DataActionTypes.CHANGE_FILTER,
  payload: name,
});
