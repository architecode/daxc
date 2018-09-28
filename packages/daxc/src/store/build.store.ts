import { AnyAction, Store, StoreEnhancer, combineReducers, createStore } from "redux";
import { State } from "../state";
import resources from "./resources";
import roles from "./roles";

export const buildStore = (initialState?: any, enhancer?: StoreEnhancer) => {
  const reducer = combineReducers({ resources, roles, });
  return createStore(reducer, initialState, enhancer);
};
