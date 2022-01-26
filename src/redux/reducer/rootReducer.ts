import { CatsAction, DataActionTypes, initState } from './../../types/types';

const initialState: initState = {
  loading: true,
  data: [],
  error: null,
  filter: 'all',
};

export const rootReducer = (state = initialState, action: CatsAction) => {
  switch (action.type) {
    case DataActionTypes.FETCH_DATA: {
      return {
        ...state,
        loading: false,
        data: [...action.payload.map((el) => ({ ...el, favorite: false }))],
      };
    }
    case DataActionTypes.FETCH_DATA_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case DataActionTypes.DELETE_ITEM: {
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.payload),
      };
    }
    case DataActionTypes.LIKE_ITEM: {
      return {
        ...state,
        data: state.data.map((el) => {
          if (el.id === action.payload) {
            return {
              ...el,
              favorite: !el.favorite,
            };
          }
          return el;
        }),
      };
    }
    case DataActionTypes.CHANGE_FILTER: {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};
