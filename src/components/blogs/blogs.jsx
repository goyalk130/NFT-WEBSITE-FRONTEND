import React from "react";
import { useParams } from "react-router-dom";
import Header from "../header/header";

export default function Blogs() {
  const { id } = useParams();
  if (id == undefined) {
    console.log("undefined h paazi");
  }

  return (
    <>
      <Header />

      <div className="back-final"></div>
      <div className="blog-page">
        <div className="test-back-circle"></div>
        <div className="test-back-circle"></div>
        <div className="test-back-circle"></div>
        <div className="test-back-circle"></div>
        <div className="back-blur"></div>
      </div>
    </>
  );
}
