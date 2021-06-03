import React from "react";
import { MDBContainer } from "mdbreact";
import "./scrollbar.css";


const ScrollBarPage = () => {
  const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
  return (
      <MDBContainer>
      <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
          <div id="col-3"/>
      </div>

      </MDBContainer>
);
}


export default ScrollBarPage;
