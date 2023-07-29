import React from "react";
import "./About.scss";
import shirtHanging from "../../assets/images/shirt-hanging.jpg";

export const About = () => {
  return (
    <section className="about-section pt-8">
      <div className="distorted-background d-flex justify-content-center align-items-center">
        <h2 className="text-white fw-bold">ABOUT</h2>
      </div>
      <div className="d-flex justify-content-center py-4">
        <div className="description d-flex flex-column flex-lg-row gap-2">
          <img className="shirt-hanging" src={shirtHanging} alt="" />
          <div className="pt-1 pb-lg-5">
            <h2 className="fs-2 mb-1">Our story</h2>
            <p className="text-secondary mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              repellat veritatis tenetur facere omnis commodi recusandae
              doloremque fuga facilis, enim, minima, delectus fugit officia
              quibusdam aliquam possimus est voluptate. Eaque soluta aperiam
              vero ratione molestias quam, veniam, adipisci eum laudantium,
              consectetur at. Praesentium, sequi molestiae aliquid incidunt
              inventore velit, sit expedita consequuntur vel ut iusto esse vero
              debitis fugiat dolor voluptatem dolorum veritatis, tenetur
              consectetur corporis. Eaque, eum perferendis! Sint. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Nobis facere
              temporibus accusamus aut quam quibusdam iusto ut asperiores ipsum
              accusantium. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quam repellat veritatis tenetur facere omnis commodi
            </p>
            <blockquote className="quote text-secondary ps-2 py-12 ms-1">
              Creativity is just connecting things. When you ask creative people
              how they did something, they feel a little guilty because they
              didn't really do it, they just saw something. It seemed obvious to
              them after a while.
            <p className="writer mt-1">- Steve Job's</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
