import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/web-design.png";
import courseImg2 from "../../assests/images/graphics-design.png";
import courseImg3 from "../../assests/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";

const coursesData = [
  {
    id: "01",
    title: "Web Development",
    desc:'Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications',
    project: 3000,
    imgUrl: courseImg1,
    rout:'/Fullstack',
    backgroundColor: "blue",
  },

  {
    id: "02",
    title: "Artificial Intelligence",
    desc:'Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. Specific applications of AI include expert systems, natural language processing, speech recognition and machine vision.',
    project: 3000,
    imgUrl: 'https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg',
    rout:'/Ai'

  },

  {
    id: "03",
    title: "Data Science",
    desc:'Data science is an interdisciplinary academic field that uses statistics, scientific computing, scientific methods, processes, algorithms and systems to extract or extrapolate knowledge and insights from noisy, structured, and unstructured data',
    project: 3000,
    imgUrl: courseImg3,
    rout:'/Ds'

  },
];

const Projects = () => {
  return (
    <section id='courses' style={{
       backgroundColor :'#E9F8F3B2'
    }}>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Courses</h2>
              </div>

              {/* <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div> */}
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <CourseCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
