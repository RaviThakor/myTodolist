import { COUNTER_INCREMENT, COUNTER_DECREMENT, ADD_TASK, REMOVE_TASK, EDIT_TASK } from './types';

export const increase = () => (dispatch) => {
    dispatch({
        type: COUNTER_INCREMENT,
    });
};

export const decrease = () => (dispatch) => {
    dispatch({
        type: COUNTER_DECREMENT,
    });
};

export const addTask = (data) => (dispatch) => {
    dispatch({
        type: ADD_TASK,
        payload: data,
    })
}

export const editTask = (data, id) => (dispatch) => {
    const obj = {
        data: data,
        id: id,
    }
    dispatch({
        type: EDIT_TASK,
        payload: obj,
    })
}

export const removeTask = (data) => (dispatch) => {
    dispatch({
        type: REMOVE_TASK,
        payload: data,
    })
}
