import axios from "axios";
import SingleBlog from "../../components/SingleBlog";

const BlogDetails = ({ blog }) => {
  console.log(blog);
  return blog? <SingleBlog blog={blog}/>:<div/>
};

export async function getStaticProps(context) {
  
  const slug = context.params.slug;

  const guidId = slug.split("-").pop();

  try {
    const response = await axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@arunrajeevan"
    );
    const blog = response.data.items.filter((item) => {
      const id = item.guid.split("/").pop();
      return id === guidId;
    }).pop();
    return {
      props: { blog: blog }, // will be passed to the page component as props
      revalidate: 10, // In seconds
    };
  } catch (error) {
    console.log("errorrrrrrrr", error);
    return {
      notFound: true,
    };
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: "Working-with-Time-and-Date-in-Node-js-ba7c76c24b0b",
        },
      },
    ],
    fallback: true,
  };
}

export default BlogDetails;
