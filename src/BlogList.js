import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({ blogs, title }) => {
  //taking data from the home.js

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((listId) => (
        <div className="blog-preview" key={listId.id}>
          <Link to={`/blogs/${listId.id}`}>
            <h2>{listId.title}</h2>
            <p>Written by {listId.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
