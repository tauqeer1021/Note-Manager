import React from "react";
import { post } from "../../services/ApiEndPoint";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const request = await post("/auth/logout");
      const response = request.data;
      if (response.success) {
        toast.success(response.message);
        navigate('/login'); 
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="container-fluid p-2">
          <input
            type="text"
            id=""
            placeholder="Search"
            className="mx-3 searchinput"
          />
          <button
            className="btn btn-dark text-white mx-3"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
