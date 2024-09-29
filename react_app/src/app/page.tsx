import React, { Fragment } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";

const page = () => {
  const name = "Rimsha";
  return (
    <div>
      {/* // MORE TEN ONE ELEMENTS IN  RACT Fragment */}

      {/* <h1 className='text-xl font-extrabold'>Helo React! I'm {name} startimg this course</h1> */}
      {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod facere corrupti magnam dignissimos consectetur ipsam corporis, sint minima minus eum placeat omnis non culpa officiis, illo dolorem soluta ducimus atque.</p> */}
      {/* first componenets */}
      {/* <Header name="Fatima"/> */}
      {/* <Header name="Razia"/> */}
      {/* <Header name="Amina"/> */}
      <Header />
      <h1 className="font-semibold text-5xl text-center">Card Gallery</h1>
      <Cards />
    </div>
  );
};

export default page;
