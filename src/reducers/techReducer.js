import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  techs: null,
  error: null,
  loading: false,
};

const techReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_TECHS:
      return {
        ...state,
        techs: payload,
        loading: false,
      };
    case ADD_TECH:
      return {
        ...state,
        techs: [...state.techs, payload],
        loading: false,
      };
    case DELETE_TECH:
      return {
        ...state,
        techs: state.techs.filter((tech) => tech.id !== payload),
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case TECHS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default techReducer;
