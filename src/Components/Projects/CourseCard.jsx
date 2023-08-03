import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

const CourseCard = (props) => {
  const { imgUrl, title, lesson, students, rating , desc, rout} = props.item;

  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
         <p>
           {desc}
         </p>
          {/* <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {lesson} Lessons
          </p> */}

          {/* <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}K
          </p> */}
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1 " style={{
          
            fontSize:'20px'
          }}>
          {/* <buton className="enroll d-flex align-items-center gap-1" style={{
            backgroundColor:'green',
            color:'white',
            borderRadius:'5px',
            padding:'10px 30px'
          }}>
            <a href="#" style={{
               color: 'white'
            }}> <Link to='/Fullstack'>view project</Link></a>
          </buton> */}
          </p>
          {/* <Link to={rout}>view project</Link> */}

          <buton className="enroll d-flex align-items-center gap-1  sm:text-3xl text-4xl font-medium text-center title-font text-white mb-4" style={{
            backgroundColor:'black',
            color:'white',
            borderRadius:'5px',
            padding:'10px 120px',
            
          }}>
          <Link to={rout} className="mr-20 " style={{
               color: 'white'}}>view project</Link>
          </buton>









          {/* <buton className="enroll d-flex align-items-center gap-1" style={{
            backgroundColor:'blue',
            color:'white',
            borderRadius:'5px',
            padding:'10px'
          }}>
            <a href="#" style={{
               color: 'white'
            }}></a>
          </buton> */}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
