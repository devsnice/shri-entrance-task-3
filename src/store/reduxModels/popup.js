const OPEN_POPUP = 'OPEN_POPUP';
const CLOSE_POPUP = 'CLOSE_POPUP';

const defaultState = {
  type: '',
  event: {}
};

function popup(state = defaultState, action) {
  const { payload } = action;

  switch (action.type) {
    case OPEN_POPUP:
      return {
        type: payload.type,
        event: payload.event
      };
    case CLOSE_POPUP:
      return {
        type: null,
        event: null
      };
    default:
      return state;
  }
}

export const openPopup = ({ type, event }) => ({
  type: OPEN_POPUP,
  payload: {
    type,
    event
  }
});

export const closePopup = () => ({
  type: CLOSE_POPUP
});

export default popup;
