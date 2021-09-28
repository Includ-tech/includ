import axios from "axios";
import { Col, Row, Container } from "react-bootstrap";
import Link from "next/link";
import * as styles from "../../styles/blog.module.scss";
import Banner from "../../components/Banner";

const getBlogUrl = (title, guid) => {
  const id = guid.split("/").pop();
  const newTitle = title.replace(/\s/g, "-");
  console.log(newTitle);
  return `${newTitle}-${id}`;
};

const Blogs = ({ response }) => {
  const { heading, paragraph, pubDate, thumbnailImage, box ,container,image,viewProject,middle} = styles;

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
 <Banner
        heading="BLOG"
        subHeading="We have developed different types of web applications and products. To learn more, choose a story below."
      />
      <Container fluid>
     
        <Row className="d-flex justify-content-center pb-5">
          {response.items.map((item) => {
            const date = item.pubDate;
            const publishdate = new Date(date).getDate();
            const monthName = new Date(date).getMonth();
            const pubYear = new Date(date).getFullYear();
            var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            var pubMonth = monthNames[monthName];
            const pubDates = pubMonth + ' ' + publishdate + ', ' + pubYear;
            return (
              <Col sm={5} className={`ml-4 mr-4 mt-5 ${container}`}>
                <div>
                <Link href={`/blog/${getBlogUrl(item.title, item.guid)}`}>
                 <div className={viewProject}>
                <h style={{ display: "inline", cursor: "pointer" }}>
                    View Blog{" "}
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      fill="white"
                    >
                      <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                    </svg>
                    </h>
                    </div>
                </Link>
                <Link href={`/blog/${getBlogUrl(item.title, item.guid)}`}>

                    <a style={{ cursor: "pointer" }}>
                      <img src={item.thumbnail} className={image}/>
                      <div className={box}>
                      <h4 className={heading}>{item.title}</h4>
                      <div className={pubDate}>{pubDates}</div>
                      <div className={paragraph}
                        dangerouslySetInnerHTML={{
                          __html: item.content.substring(0, 100),
                          // __html: item.content=item.content.length>100 ?item.content.substring(0,105)+'....':item.content.substring(0,100),

                        }}
                      />
                      {/* <span className="">Read more...</span> */}
                      </div>
                  </a>
                  </Link>
               </div>
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
