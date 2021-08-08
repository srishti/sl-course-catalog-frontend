import React from "react";
import Header from "../../components/Layout/Header/Header";
import CourseVideosList from "../../components/Course/CourseVideo/CourseVideosList";

const CourseDetails = () => {
  return (
    <>
      <Header />
      <main>
        <CourseVideosList />
      </main>
    </>
  );
};

export default CourseDetails;
