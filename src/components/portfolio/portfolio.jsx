import React, { Component } from "react";
import "./portfolio.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolio: [
        {
          name: "El Sativo",
          link: "http://elsativo.com/",
          imageName: "logo-elsativo.png",
          altText: "El Sativo",
        },
        {
          name: "Dhanraj Hospitality",
          link: "http://dhanrajhospitality.com/",
          imageName: "logo-dhanraj.png",
          altText: "Dhanraj Hospitality",
        },
        {
          name: "Afleo",
          link: "https://afleo.com/",
          imageName: "logo-afleo.png",
          altText: "Afleo",
        },
        {
          name: "Thelawyerpal",
          link: "https://thelawyerpal.com/",
          imageName: "logo-lawyerpal.png",
          altText: "The Lawyer pal",
        },
        {
          name: "Myglamm",
          link: "https://m.myglamm.com/",
          imageName: "logo-myglamm.png",
          altText: "Myglamm",
        },
        {
          name: "Ashapura Group",
          link: "https://www.ashapuraagroup.com/",
          imageName: "logo-ashapuragroup.png",
          altText: "Ashapura",
        },
        {
          name: "Arham Expochem",
          link: "http://arhamexpochem.com/",
          imageName: "logo-arham.png",
          altText: "Arham Expochem",
        },
      ],
    };
  }
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <section id="portfolio" className="pt-5 pb-5">
        <Container className="pt-5">
          <h2 className="mb-3">PORTFOLIO</h2>
          {/* <Row>
            <div id="myBtnContainer">
              <button className="btn active" onClick="filterSelection('all')">
                {" "}
                Show all
              </button>
              <button className="btn" onClick="filterSelection('nature')">
                {" "}
                Nature
              </button>
              <button className="btn" onClick="filterSelection('cars')">
                {" "}
                Cars
              </button>
              <button className="btn" onClick="filterSelection('people')">
                {" "}
                People
              </button>
            </div>
          </Row> */}
          <Row>
            {/* <Slider {...settings}>
                
              </Slider> */}
            {this.state.portfolio.map((item, index) => {
              return (
                <Col sm="3" key={item.name} className="pt-3 pt-sm-5 content">
                  <a href={item.link}>
                    <img
                      className="client-logo"
                      src={item.imageName}
                      alt={item.altText}
                    />
                  </a>
                  <p className="pt-3">{item.altText}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>
    );
  }
}
