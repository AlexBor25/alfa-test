import { CatsData } from '../../types/types';

export const filterItems = (arr: CatsData[], filter: string) => {
  switch (filter) {
    case 'liked':
      return arr.filter((el) => el.favorite);
    default:
      return arr;
  }
};
