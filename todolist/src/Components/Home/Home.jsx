import React from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div className="text-2xl font-bold pt-14">
      Hello {currentUser.display ? currentUser.display : currentUser.email}
    </div>
  );
};
