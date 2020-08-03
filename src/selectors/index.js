import { createSelector } from "reselect";

/**
 * Direct selector to the commissioning state domain
 */
const selectNewsListDomain = () => (state) => state.get('pageNumber');

/**
 * Other specific selectors
 */

/**
 * Default selector used by Commissioning
 */
const makeSelectPageNumber = () =>
createSelector(selectNewsListDomain(), (substate) => substate ? substate.get('pageNumber') :{});

const makeSelectNewsSuccess = () =>
createSelector(selectNewsListDomain(), (substate) => substate ? substate.get("newsList") : {});



export { makeSelectPageNumber,makeSelectNewsSuccess};
export { selectNewsListDomain };