import options from './optionsData';
import { TOGGLE_OPTION } from './options.actions';

const initialState = {
  optionsList: options,
  selected: [],
};

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPTION: {
      const { optionId } = action.payload;
      const newSelected = state.selected.includes(optionId)
        ? state.selected.filter(id => id !== optionId)
        : state.selected.concat(optionId);

      return {
        ...state,
        selected: newSelected,
      };
    }
    default:
      return state;
  }
};

export default optionsReducer;
