export const DirectReducer = (state: any, action: any) => state;

export const createReducer = <A extends { type: string; } = any, S = any>(action: A, actionHandlers: { [type: string]: (state: S, anyAction: any) => S; }) =>
  (actionHandlers[action.type] || DirectReducer);
