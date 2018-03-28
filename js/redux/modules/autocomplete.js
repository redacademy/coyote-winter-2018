const UPDATE_AUTO_SELECTED = 'UPDATE_AUTO_SELECTED';
const UPDATE_SUGGESTIONS = 'UPDATE_SUGGESTIONS';

export const updateAutoSelected = selected => ({
  type: UPDATE_AUTO_SELECTED,
  payload: selected
});

export const updateSuggestions = suggestions => ({
  type: UPDATE_SUGGESTIONS,
  payload: suggestions
});

export default function(
  state = {
    selected: '',
    suggestions: []
  },
  action
) {
  switch (action.type) {
    case UPDATE_AUTO_SELECTED:
      return { ...state, selected: action.payload };
    case UPDATE_SUGGESTIONS:
      return { ...state, suggestions: action.payload };
    default:
      return state;
  }
}
