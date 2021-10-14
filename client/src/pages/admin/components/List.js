import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { AiFillCaretDown } from "react-icons/ai";
import { DropdownButton, Dropdown } from "react-bootstrap";

import { API } from "../../../config/api";

export default function List() {
  const [transactions, setTransactions] = useState([]);
  const [reload, setReload] = useState(false);

  const getTransactions = async () => {
    try {
      const response = await API.get("/transactions");

      setTransactions(response.data.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApprove = async (id) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      let approve = {
        paymentStatus: "Approved",
      };

      const response = await API.patch("/transaction/" + id, approve, config);
      setReload(true);
    } catch (error) {
      console.log();
    }
  };

  const handleCancel = async (id) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      let approve = {
        paymentStatus: "Cancel",
      };

      const response = await API.patch("/transaction/" + id, approve, config);
      setReload(true);
    } catch (error) {
      console.log();
    }
  };

  console.log(reload);

  useEffect(() => {
    getTransactions();
  }, [reload]);

  const getBackgroundColor = (dataStatus) => {
    if (dataStatus === "Approved") {
      return <span className="text-success">{dataStatus}</span>;
    } else if (dataStatus === "Pending") {
      return <span className="text-warning">{dataStatus}</span>;
    } else if (dataStatus === "Cancel") {
      return <span className="text-danger">{dataStatus}</span>;
    } else {
      return <span>-</span>;
    }
  };

  return (
    <>
      <Table striped hover>
        <thead>
          <tr>
            <th className="text-danger">No</th>
            <th className="text-danger">Users</th>
            <th className="text-danger">Transfer Proof</th>
            <th className="text-danger">Remaining Active</th>
            <th className="text-danger">Status User</th>
            <th className="text-danger">Status Payment</th>
            <th className="text-center text-danger">Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions?.map((userData, index) => (
            <tr key={index}>
              <td>{userData.id}</td>
              <td>{userData.users.fullname}</td>
              <td>{userData.transferProof}</td>
              <td>{userData.remainingActive} / Hari</td>
              <td>
                <span
                  className={
                    userData.userStatus === "Active"
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {userData.userStatus}
                </span>
              </td>
              <td>{getBackgroundColor(userData.paymentStatus)}</td>
              <td align="center">
                <DropdownButton id="dropdown-basic-button">
                  <Dropdown.Item
                    className="text-success"
                    onClick={() => handleApprove(userData.id)}
                  >
                    Approved
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-danger"
                    onClick={() => handleCancel(userData.id)}
                  >
                    Cancel
                  </Dropdown.Item>
                </DropdownButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
