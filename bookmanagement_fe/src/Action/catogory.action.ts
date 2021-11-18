import { ICategory } from "../State/category.state";

export enum CATEGORY_ACTION_TYPE {
  ADD_NEW_CATEGORY,
  LOAD_ALL_CATEGORY
}

export interface createCategory {
  type: CATEGORY_ACTION_TYPE.ADD_NEW_CATEGORY;
  payload: ICategory;
}

export interface loadAllCategory {
  type : CATEGORY_ACTION_TYPE.LOAD_ALL_CATEGORY,
  payload : null
}

export type CategoryActions = createCategory | loadAllCategory;
