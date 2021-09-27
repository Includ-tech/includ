import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import Link from "next/link";

const getBlogUrl = (title, guid) => {
  const id = guid.split("/").pop();
  const newTitle = title.replace(/\s/g, "-");
  console.log(newTitle);
  return `${newTitle}-${id}`;
};

const Blogs = ({ response }) => {
  return (
    <div>
      {/* {response.stories.map((item) => {
        return (
          <div>
            <h1>{item.content.title}</h1>
            {render(item.content.content, {
              nodeResolvers: {
                [NODE_CODEBLOCK]: (children, props) => (
                  <SyntaxHighlighter
                    language="javascript"
                    style={obsidian}
                    // showLineNumbers
                    // style={{background:'black'}}
                    {...props}
                  >
                    {children}
                  </SyntaxHighlighter>
                ),
              },
            })}
          </div>
        );
      })} */}

      <Container>
        <Row className="d-flex justify-content-center">
          {response.items.map((item) => {
            return (
              <Col sm={5} className="ml-2 mt-5">
                <Link href={`/blogs/${getBlogUrl(item.title, item.guid)}`}>
                  <a style={{ cursor: "pointer" }}>
                    <div>
                      <h4>{item.title}</h4>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.content.substring(0, 100),
                        }}
                        style={{ fontSize: "0.8rem" }}
                      />
                    </div>
                  </a>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export async function getStaticProps(context) {
  try {
    const response = await axios.get(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@arunrajeevan"
    );
    return {
      props: { response: response.data }, // will be passed to the page component as props
      revalidate: 10, // In seconds
    };
  } catch (error) {
    console.log("errorrrrrrrr", error);
    return {
      notFound: true,
    };
  }
}

export default Blogs;
