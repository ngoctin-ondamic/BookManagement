import React, { useContext, useEffect } from "react";
import { CATEGORY_ACTION_TYPE } from "../../../Action/catogory.action";
import { CategoryContext } from "../../../Context/categories.context";

const ViewAllCategory = () => {
  //   useEffect(() => {
  //     console.log("View All Component");
  //     dispatch({
  //       type: CATEGORY_ACTION_TYPE.LOAD_ALL_CATEGORY,
  //       payload: null,
  //     });
  //   }, []);
  //   const handleOnClick = (event: React.MouseEvent) => {
  //     // call service to do logic
  //   };
  const { categories, dispatch } = useContext(CategoryContext);

  return (
    <table className="viewAllCategory">
      <thead>
        <td>Cate ID</td>
        <td>Cate Name</td>
        <td colSpan={2}>Action</td>
      </thead>
      <tbody>
        {categories.list.map((category) => {
          return (
            <tr>
              <td>{category.id}</td>
              <td>{category.name}</td>
              <td><button>Update</button></td>
              <td><button>Delete</button></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ViewAllCategory;
