import { createSelector } from 'reselect';

export const optionsListSelectors = state => {
  return state.options.optionsList;
};
export const selectedIdsSelectors = state => {
  return state.options.selected;
};
export const selectedOptionsSelector = createSelector(
  [optionsListSelectors, selectedIdsSelectors],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option => selectedIds.includes(option.id));
  },
);

export const availableOptionsSelector = createSelector(
  [optionsListSelectors, selectedIdsSelectors],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(option => !selectedIds.includes(option.id));
  },
);
