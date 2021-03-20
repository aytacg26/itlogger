import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  DELETE_LOG,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_LOG,
} from './types';

// export const getLogs = () => {
//   return async (dispatch) => {
//     //we will set loading to true
//     setLoading();

//     const res = await fetch('/logs');
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data,
//     });
//   };
// };

//Get logs from server
export const getLogs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const addLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const deleteLog = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: DELETE_LOG,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

export const updateLog = (log) => async (dispatch) => {
  try {
    setLoading();
    const id = log.id;
    const res = await fetch(`/logs/${id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
    dispatch({
      type: UPDATE_LOG,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data,
    });
  }
};

//Set Current Log :
export const setCurrent = (log) => {
  return {
    type: SET_CURRENT,
    payload: log,
  };
};

//Clear Current Log :
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT,
  };
};

//SET LOADING TO TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
