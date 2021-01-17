import React, { useState } from "react";
import uuid from "react-uuid";

const Pagination1 = ({ postsPerPage, totalPosts, paginate }) => {
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number, index) => (
          <li key={uuid()} className="page-item">
            <a
              onClick={() => paginate(number, index)}
              href="!#"
              className="page-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Pagination1;
