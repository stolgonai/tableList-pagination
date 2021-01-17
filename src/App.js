import React, { useState, useEffect } from "react";
import "./styles.css";
// import axios from "axios";
import Customer from "./components/Customer";
import Pagination1 from "./components/Pagination1";
import TempData from "./TempData";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(15);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async function () {
      try {
        const data = await setData(TempData);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    })();
    // const fetchPosts = async () => {
    //   setLoading(true);
    //   setData(TempData);
    //   setLoading(false);
    // };
    // fetchPosts();
  }, []);

  //
  // console.log(data, "data");

  // get current data
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActive(active ? false : true);
  };

  return (
    <div className="App">
      <h1> My Customer {currentPage}</h1>
      <Customer data={currentPosts} loading={loading} />
      <Pagination1
        postsPerPage={postsPerPage}
        totalPosts={data.length}
        paginate={paginate}
        style={{ backgroundColor: "red" }}
      />
    </div>
  );
}
