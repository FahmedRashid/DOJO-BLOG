import BlogList from "./BlogList";
import useFetch from "./useFetch";

// let name = 'Fahmed';
const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  //Filter is a callback function for each items from the array--> <BlogList blogs={blogs.filter((oneBlog) => oneBlog.author === 'Fahmed')} title = "Fahmed's Blogs"/>
  // {blogs && <BlogList blogs={blogs} title = "All Blogs!"/>} --> conditional template. if left is true execute right
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
    </div>
  );
};
export default Home;
