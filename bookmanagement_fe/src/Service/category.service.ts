import { ICategories, ICategory } from "../State/category.state";
import CategoryAPI from "../API/category.api";
class CategoryService {

  validateInputCategory = (category: ICategory): boolean => {
    if (category.name.length === 0 || category.name == null) {
      return false;
    }
    return true;
  };

  addCategoryToList = (category : ICategory, categories : ICategories) => {
    return {...categories, list : [...categories.list,category]}
  }

  getAllCategories = () : ICategories => {
    let categories : ICategories = {
      list : []
    }
    console.log("Service")
    CategoryAPI.getAllCategories()
    .then( (response : any) => {
      const data = response.data;
      data.forEach((category : ICategory) => {
        categories.list.push(category);
      });
    } )
    return categories;
  }   
  

  createCategory = (category: ICategory) => {
    // call axios to fecth api
    CategoryAPI.createCategory(category).then((response: any) => {});
  };
}

export default new CategoryService();
