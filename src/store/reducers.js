import { COUNTER_INCREMENT, COUNTER_DECREMENT, ADD_TASK, REMOVE_TASK, EDIT_TASK } from './types';

const initialState = { counter: 0, tasks: [], id: 0 };

const counterReducer = (data = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case COUNTER_INCREMENT:
			return { ...data, counter: data.counter + 1 };

		case COUNTER_DECREMENT:
			return { ...data, counter: data.counter - 1 };

		case ADD_TASK:
			return { ...data, tasks: [...data.tasks, { title: payload, id: data.id }], id: data.id + 1 };

		case EDIT_TASK:
			let editedTasks = data.tasks.map(item => {
				if (item.id === payload.id) {
					return { title: payload.data, id: payload.id };
				} else {
					return item;
				}
			});
			return { ...data, tasks: editedTasks };

		case REMOVE_TASK:
			let tasksArray = data.tasks.filter(item => item.id !== payload);
			return { ...data, tasks: tasksArray };

		default:
			return { ...data };
	}
};

export default counterReducer;