import React, { useContext, useState } from "react";
import { CATEGORY_ACTION_TYPE } from "../../../Action/catogory.action";
import { CategoryContext } from "../../../Context/categories.context";
import CategoryService from "../../../Service/category.service";
import { ICategory, initialCategory } from "../../../State/category.state";
import Header from "../../Common/header.component";

const CreateCategory = () => {
  const [category, setCategory] = useState<ICategory>(initialCategory);
  const {dispatch } = useContext(CategoryContext);
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory({ ...category, name: event.target.value });
  };

  const handleOnClick = (event: React.MouseEvent) => {
    // add to categories
    dispatch({
        type : CATEGORY_ACTION_TYPE.ADD_NEW_CATEGORY,
        payload : category
    })
    // call service to add to database
    CategoryService.createCategory(category);
  };

  return (
    <div className="createCategory">
      <Header/>
      <h1>This is Create Category</h1>
      <input
        onChange={handleOnChange}
        type="text"
        name="cate_name"
        id=""
        value={category.name}
      />
      <button onClick={handleOnClick}>Create</button>
    </div>
  );
};

export default CreateCategory;
