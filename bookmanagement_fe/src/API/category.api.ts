import { ICategory } from "../State/category.state";
import httpCommon from "./http.common";

class CategoryAPI {

    createCategory(category : ICategory){
        return httpCommon.post<ICategory>("api/category/save",category)
    }
    
    getAllCategories(){
        console.log("API")
        return httpCommon.get<Array<ICategory>>("api/category/all");
    }
}

export default new CategoryAPI();