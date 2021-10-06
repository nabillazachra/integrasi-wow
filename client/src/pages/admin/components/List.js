import React from "react";
import { Table } from "react-bootstrap";
import users from "../../../data/userData";
import { AiFillCaretDown } from "react-icons/ai";
import { Dropdown } from "react-bootstrap";

function DropdownList() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <span
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </span>
  ));

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          <AiFillCaretDown size={25} className="p-e text-primary" />
        </Dropdown.Toggle>
        <Dropdown.Menu className="mb-5">
          <Dropdown.Item>
            <span className="text-success fw-bold">Approve</span>
          </Dropdown.Item>
          <Dropdown.Item>
            <span className="text-danger fw-bold">Cancel</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default function List() {
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
      <Table responsive striped hover>
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
          {users.map((userData, index) => (
            <tr key={index}>
              <td>{userData.id}</td>
              <td>{userData.name}</td>
              <td>{userData.tf}</td>
              <td>{userData.remaining} / Hari</td>
              <td>
                <span
                  className={
                    userData.userStats === "Active"
                      ? "text-success"
                      : "text-danger"
                  }
                >
                  {userData.userStats}
                </span>
              </td>
              <td>{getBackgroundColor(userData.paymentStats)}</td>
              <td align="center">
                <DropdownList />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
