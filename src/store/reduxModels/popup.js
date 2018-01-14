const OPEN_POPUP = 'OPEN_POPUP';
const CLOSE_POPUP = 'CLOSE_POPUP';

const defaultState = {
  type: null,
  event: {},
  popupActions: {}
};

function popup(state = defaultState, action) {
  const { payload } = action;

  switch (action.type) {
    case OPEN_POPUP:
      return {
        type: payload.type,
        event: payload.event,
        popupActions: payload.actions
      };
    case CLOSE_POPUP:
      return {
        ...defaultState
      };
    default:
      return state;
  }
}

export const openPopup = ({ type, event, actions }) => ({
  type: OPEN_POPUP,
  payload: {
    type,
    event,
    actions
  }
});

export const closePopup = () => ({
  type: CLOSE_POPUP
});

export default popup;
