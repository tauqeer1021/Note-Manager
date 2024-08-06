import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPen } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const Notes = ({ title, date, handleUpdate }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <>
      <div
        className="card position-relative rounded-4 border-0"
        style={{ width: "18rem", backgroundColor: "#FEC971" }}
      >
        <div className="card-body position-relative">
          <h5 className="card-title overflow-auto">{title}</h5>
          <div className="buttonContent">
            <div className="date d-flex justify-content-between align-items-center">
              <h5 className="fs-6">{date}</h5>
              {show && (
                <div className="dropdown">
                  <FaPen
                    size={20}
                    cursor={"pointer"}
                    data-bs-toggle="modal"
                    data-bs-target="#updatemodal"
                    onClick={handleUpdate}
                  />
                  <MdDelete
                    size={25}
                    color="red"
                    cursor={"pointer"}
                    data-bs-toggle="modal"
                    data-bs-target="#deleteEmployeeModal"
                    onClick={handleUpdate}
                  />
                </div>
              )}
              <div className="" onClick={handleShow}>
                <BsThreeDotsVertical
                  size={25}
                  cursor={"pointer"}
                ></BsThreeDotsVertical>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
