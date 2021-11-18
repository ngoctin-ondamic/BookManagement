import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">Dashboard</Link>
      <Link to="/createcategory">Create Category</Link>
      <Link to="/viewallcategory">View All Categories</Link>
    </div>
  );
};

export default Header;
