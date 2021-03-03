import React from "react";
import Banner from "../../components/Banner";
import { useRouter } from "next/router";
import BannerDescription from "../../components/BannerDescription";
import { Container, Row, Col } from "react-bootstrap";

const projectDetail = (props) => {
  const tabsContent = [
    {
      tab: "service",
      title: "Afleo",
      subTitle:
        "Afleo - DGFT Consultants (MEIS/SEIS/EPCG/Advance Authorisation)",
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
  const router = useRouter();
  const { slug } = router.query;
  let project = props.itemDetail || {
    ...tabsContent.find((el) => el.slug == slug),
  };

  return (
    <>
      <Banner
        heading={project.title}
        subHeading={project.subTitle}
        url={project.url}
      />
      <BannerDescription text={`Technologies used: ${project.techStack}`} />
      <Container>
        <Row className="mt-5 pt-sm-5">
          {project.imgs &&
            project.imgs.map((snap) => {
              return (
                <Col className="text-center mb-5" key={snap}>
                  <div
                    style={{
                      boxShadow: "1px 1px 6px 1px #c0bebe",
                      maxHeight: "670px",
                      overflow: "hidden",
                    }}
                  >
                    <img src={`/assets/images/${snap}`} width="100%" />
                  </div>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default projectDetail;

export async function getStaticProps({ params }) {
  let data = [
    {
      tab: "service",
      title: "Afleo",
      subTitle:
        "Afleo - DGFT Consultants (MEIS/SEIS/EPCG/Advance Authorisation)",
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

  let itemDetail = data.find((x) => x.slug === params.slug);

  return {
    props: itemDetail,
  };
}

export async function getStaticPaths() {
  let data = [
    {
      tab: "service",
      title: "Afleo",
      subTitle:
        "Afleo - DGFT Consultants (MEIS/SEIS/EPCG/Advance Authorisation)",
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

  // Get the paths we want to pre-render based on posts
  const paths = data.map((project) => ({
    params: { slug: project.slug },
  }));

  // We'll pre-render only these paths at build time.
  return { paths, fallback: false };
}
