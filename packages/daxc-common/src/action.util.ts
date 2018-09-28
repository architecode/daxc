import { isNullOrUndefined } from "util";

export interface Action {
  type: string;
}

export interface ActionWithPayload<P> extends Action {
  payload: P;
}

export type ActionCreator = (...args: any[]) => any;
export interface ActionCreators {
  [actionCreator: string]: ActionCreator;
}

export type ActionsUnion<A extends ActionCreators> = ReturnType<A[keyof A]>;

export interface ActionHandlers<A, S> {
  [type: string]: (state: S, action: A) => S;
}

export function createAction(type: string): Action;
export function createAction<P>(type: string, payload: P): ActionWithPayload<P>;
export function createAction<P>(type: string, payload?: P) {
  return isNullOrUndefined(payload) ? { type } : { type, payload };
}
