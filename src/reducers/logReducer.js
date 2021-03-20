import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
} from '../actions/types';

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null,
};

const logReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, payload],
        loading: false,
      };

    case GET_LOGS:
      return {
        ...state,
        logs: payload,
        loading: false,
        error: null,
      };

    case DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== payload),
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case LOGS_ERROR:
      console.error(payload);
      return {
        ...state,
        loading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default logReducer;