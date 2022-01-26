interface ImageField {
  height: number;
  id: string;
  url: string;
  width: number;
}

export interface CatsData {
  id: string;
  name: string;
  description: string;
  image: ImageField;
  adaptability?: number;
  affection_level?: number;
  alt_names?: string;
  cfa_url?: string;
  child_friendly?: number;
  country_code?: string;
  country_codes?: string;
  dog_friendly?: number;
  energy_level?: number;
  experimental?: number;
  grooming?: number;
  hairless?: number;
  health_issues?: number;
  hypoallergenic?: number;
  indoor?: number;
  intelligence?: number;
  lap?: number;
  life_span?: string;
  natural?: number;
  origin?: string;
  rare?: number;
  reference_image_id?: string;
  rex?: number;
  shedding_level?: number;
  short_legs?: number;
  social_needs?: number;
  stranger_friendly?: number;
  suppressed_tail?: number;
  temperament?: string;
  vcahospitals_url?: string;
  vetstreet_url?: string;
  vocalisation?: number;
  weight?: { imperial: string; metric: string };
  wikipedia_url?: string;
  favorite: boolean;
}

export interface initState {
  data: CatsData[] | [];
  loading: boolean;
  error: string | null;
  filter: string;
}

export enum DataActionTypes {
  FETCH_DATA = 'FETCH_DATA',
  FETCH_DATA_ERROR = 'FETCH_DATA_ERROR',
  DELETE_ITEM = 'DELETE_ITEM',
  LIKE_ITEM = 'LIKE_ITEM',
  CHANGE_FILTER = 'CHANGE_FILTER',
}

type FetchData = {
  type: DataActionTypes.FETCH_DATA;
  payload: CatsData[];
};

type FetchDataError = {
  type: DataActionTypes.FETCH_DATA_ERROR;
  payload: string;
};

type DeleteItem = {
  type: DataActionTypes.DELETE_ITEM;
  payload: string;
};

type LikeItem = {
  type: DataActionTypes.LIKE_ITEM;
  payload: string;
};

type changeFilter = {
  type: DataActionTypes.CHANGE_FILTER;
  payload: string;
};

export type CatsAction =
  | FetchData
  | FetchDataError
  | DeleteItem
  | LikeItem
  | changeFilter;
