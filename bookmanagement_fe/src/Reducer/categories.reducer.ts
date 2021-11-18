import { CategoryActions, CATEGORY_ACTION_TYPE } from "../Action/catogory.action";
import categoryService from "../Service/category.service";
import CategoryService from "../Service/category.service";
import { ICategories } from "../State/category.state";

export const categoryReducer = (categories : ICategories,action : CategoryActions) : ICategories => {
    switch (action.type) {
        case CATEGORY_ACTION_TYPE.ADD_NEW_CATEGORY:
            return CategoryService.addCategoryToList(action.payload,categories);
        case CATEGORY_ACTION_TYPE.LOAD_ALL_CATEGORY:
            console.log("Reducer")
            return categoryService.getAllCategories();
        default:
            return {...categories}
    }
}
