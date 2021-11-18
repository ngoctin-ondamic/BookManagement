import categoryService from "../Service/category.service"

export interface ICategory {
    id : number | null,
    name : string
}

export interface ICategories {
    list : Array<ICategory>
}

export const initialCategory : ICategory = {
    id : null,
    name : ''
}

export const intitialCategories : ICategories = {
    list : categoryService.getAllCategories().list
}