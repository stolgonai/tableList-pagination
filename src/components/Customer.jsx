import React from "react";
import Table from "react-bootstrap/Table";
import { headers } from "../TempData";
import uuid from "react-uuid";

const Customer = ({ data, loading }) => {
  const titles = headers.map((h) => h.title);
  const headerRow = data[0] && Object.keys(data[0]);

  if (loading) {
    return <h2> Loading.... </h2>;
  }

  return (
    <Table responsive="sm" className="table">
      <thead>
        <tr>
          {/* <th>#</th> */}
          {titles.map((h) => (
            <th key={uuid()} className="list-item">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr className="oneRow" key={index}>
            {headerRow.map((cellData, index) => (
              <td key={index}>{row[cellData]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};
export default Customer;
