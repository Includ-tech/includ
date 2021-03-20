import Head from "next/head";
import React, { useState } from "react";
import Banner from "../components/Banner";
import { Row, Col, Container } from "react-bootstrap";
import * as styles from "../styles/portfolio.module.scss";
import PreFooter from "../components/PreFooter";
import Projects from "../components/Projects";

const { tabStyle, isMargin, tabWidth, tabActive } = styles;

const tabsContent = [
  {
    tab: "service",
    title: "Afleo",
    subTitle: "Afleo - DGFT Consultants (MEIS/SEIS/EPCG/Advance Authorisation)",
    imgs: ["afleo-web.png", "afleo-mobile.png"],
    slug: "afleo",
    techStack: "HTML5, CSS3, JavaScript, WordPress",
    url: "https://afleo.com/",
    screen: "screen-afleo.png",
  },

  {
    tab: "products",
    title: "El Sativo",
    subTitle: "El Sativo Tequila",
    imgs: ["elsativo-web.png", "elsativo-mobile.png"],
    slug: "elsativo",
    techStack: "HTML5, CSS3, JavaScript, Git, Bootstrap",
    url: "http://elsativo.com/",
    screen: "screen-elsativo.png",
  },

  {
    tab: "products",
    title: "Myglamm",
    subTitle:
      "Buy International Beauty Products - Skin Care, Makeup Kits, Cosmetics & Sanitizers Online",
    imgs: ["myglamm-mobile.png"],
    slug: "myglamm",
    techStack:
      "Angular, Angular Universal, HTML5, CSS3, JavaScript, Git, NodeJs",
    url: "",
    screen: "screen-myglamm.png",
  },

  {
    tab: "service",
    title: "Wrkspot",
    subTitle:
      "Hotel Management Software | Workspot | Hotel Employee Management",
    imgs: ["wrkspot-web.png", "wrkspot-mobile.png"],
    slug: "wrkspot",
    techStack:
      "React, NextJs, HTML5, CSS3, JavaScript, Firebase, Bootstrap, Git",
    url: "",
    screen: "screen-wrkspot.png",
  },
  {
    tab: "product",
    title: "igrenEnergi",
    subTitle:
      "igrenEnergi - Battery Management System | Intelligent and Patented",
    imgs: ["igrenenergi-web.png", "igrenenergi-mobile.png"],
    slug: "igrenenergi",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, WordPress, Elementor",
    url: "https://igrenenergi.com/",
    screen: "screen-igrenenergi.png",
  },
  {
    tab: "product",
    title: "MR Global",
    subTitle: "M&R Global - Copperhead",
    imgs: ["mrprintglobal-web.png", "mrprintglobal-mobile.png"],
    slug: "mrprintglobal",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, Git",
    url: "https://mrprintglobal.com/",
    screen: "screen-mrprintglobal.png",
  },

  {
    tab: "product",
    title: "Group DCC",
    subTitle:
      "DCC Group of companies is the home to the connected ecosystem of printing. DCC Group is Asia’s largest provider of printing technologies for screen, textile and sublimation printing.",
    imgs: ["groupdcc-web.png", "groupdcc-mobile.png"],
    slug: "groupdcc",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, Git",
    url: "https://groupdcc.com/",
    screen: "screen-groupdcc.png",
  },

  // {
  //   tab: "product",
  //   title: "Wiz Shops",
  //   subTitle:
  //     "Welcome to WizShops.com, Launch your eCommerce website, and Sell Online in 20Min.",
  //   imgs: ["afleo-web.png", "afleo-mobile.png"],
  //   slug: "wizshops",
  //   themeColor: "blue",
  // },
  {
    tab: "service",
    title: "Batterypool",
    subTitle: "BatteryPool | SaaS Platform to manage EV fleets",
    imgs: ["batterypool-web.png"],
    slug: "batterypool",
    techStack: "Angular, HTML5, CSS3, JavaScript, Nebular, Bootstrap, Git",
    url: "",
    screen: "screen-batterypool.png",
  },
  {
    tab: "service",
    title: "Destarinc",
    subTitle: "A global recruiting and staffing agency",
    imgs: ["destarinc-web.png", "destarinc-mobile.png"],
    slug: "destarinc",
    techStack: "HTML5, CSS3, JavaScript, Bootstrap, Git",
    url: "https://hinals.gitlab.io/destarinc",
    screen: "screen-destarinc.png",
  },
  {
    tab: "service",
    title: "Ashapura Group",
    subTitle:
      "Ashapuraa Group is a Syndicate Organization of 4 companies providing quality raw materials and services to small and large scale industries.",
    imgs: ["ashapuraagroup-web.png", "ashapuraagroup-mobile.png"],
    slug: "ashapuraagroup",
    techStack: "HTML5, CSS3, JavaScript, Git, Bootstrap, Firebase",
    url: "https://www.ashapuraagroup.com/",
    screen: "screen-ashapuraagroup.png",
  },

  {
    tab: "service",
    title: "Arham Expochem",
    subTitle:
      "Arham Group is young and energetic company engaged in Sourcing and trading operations in India as well as overseas.",
    imgs: ["arhamexpochem-web.png", "arhamexpochem-mobile.png"],
    slug: "arhamexpochem",
    techStack: "HTML5, CSS3, JavaScript, Git, Bootstrap",
    url: "http://arhamexpochem.com/",
    screen: "screen-arhamexpochem.png",
  },
];

export default function Portfolio() {
  const [tab, setTab] = useState("all");

  let selectedTabProjects = tabsContent.filter((item) => item.tab == tab);
  if (selectedTabProjects.length == 0) {
    selectedTabProjects = tabsContent;
  }

  return (
    <div>
      <Head>
        <title>Portfolio - Includ</title>
        <meta
          name="description"
          content="An exhibition of our projects and work"
        />
        <meta
          name="keywords"
          content="portfolio, projects, work, includ, website, web, website development, web development, app development, hybrid app development, mobile app development, web designing, web developer"
        />
        <meta name="author" content="Includ" />
      </Head>
      <Banner
        heading="PORTFOLIO"
        subHeading="We have developed different types of web applications and products. To learn more, choose a story below."
      />

      <Container fluid style={{ paddingBottom: "3rem" }}>
        <div className={"d-flex justify-content-between " + tabWidth}>
          <h4
            className={`${tabStyle} ${tab == "all" ? tabActive : ""}`}
            onClick={() => setTab("all")}
          >
            All
          </h4>
          <h4
            className={`${tabStyle} ${tab == "products" ? tabActive : ""}`}
            onClick={() => setTab("products")}
          >
            Products
          </h4>
          <h4
            className={`${tabStyle} ${tab == "service" ? tabActive : ""}`}
            onClick={() => setTab("service")}
          >
            Service
          </h4>
        </div>
      </Container>

      <Container fluid style={{ paddingBottom: "5rem" }}>
        <Row>
          {selectedTabProjects.map((item, index) => {
            return (
              <Col sm={6} style={{ paddingTop: "2rem" }} key={item.slug}>
                <Projects item={item} style="" />
              </Col>
            );
          })}
        </Row>
      </Container>
      <PreFooter />
    </div>
  );
}