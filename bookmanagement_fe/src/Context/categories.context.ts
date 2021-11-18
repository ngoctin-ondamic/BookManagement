import React from "react";
import { CategoryActions } from "../Action/catogory.action";
import { ICategories, intitialCategories } from "../State/category.state";

export const CategoryContext = React.createContext<
{
    categories : ICategories,
    dispatch : React.Dispatch<CategoryActions>;
}>({
    categories : intitialCategories,
    dispatch : () => undefined,
});