import { createStore } from 'redux';

import popup from './reduxModels/popup.js';

const store = createStore(popup);

export const { dispatch } = store;

export default store;
