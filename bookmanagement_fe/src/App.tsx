import { useReducer } from "react";
import { Routes,Route } from "react-router-dom";
import CreateCategory from "./Components/Category/View/category.create.component";
import ViewAllCategory from "./Components/Category/View/category.viewall.component";
import Dashboard from "./Components/Common/dashboard.component";
import { CategoryContext } from "./Context/categories.context";
import { categoryReducer } from "./Reducer/categories.reducer";
import { intitialCategories } from "./State/category.state";

function App() {
  const [categories,dispatch] = useReducer(categoryReducer,intitialCategories);
  return (
    <CategoryContext.Provider value={{categories,dispatch}} >
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard/>}>Dashboard</Route>
          <Route path="/viewallcategory" element={<ViewAllCategory/>} ></Route>
          <Route path="/createcategory" element={<CreateCategory/>} ></Route>
        </Routes>
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
