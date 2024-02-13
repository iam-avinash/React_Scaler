import React from "react";
import Banner from "./Banner";
import NavBar from "./NavBar";
import Pagination from "./Pagination";
import TrendingMovei from "./TrendingMoveis";

export default function Home() {
  return (
    <>
      <div>Home Page</div>
      <NavBar />
      <Banner />
      <TrendingMovei />
      <Pagination />
    </>
  );
}
