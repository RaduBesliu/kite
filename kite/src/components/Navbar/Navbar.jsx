// React
import React from "react";
import { useState } from "react";

// Libraries
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Components
import { StyledButton } from "../Button/Button.styles";
import { FaUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";

// Features
import { setNewSpot } from "../../features/addSpot/addSpotSlice";

function Navbar({ className }) {
  const [showLogout, setShowLogout] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newSpot = useSelector((state) => state.addSpot.value);

  const handleUserClick = () => {
    setShowLogout((value) => !value);
  };

  const openAddSpotForm = (e) => {
    e.preventDefault();
    dispatch(setNewSpot({ ...newSpot, isPopupOpen: !newSpot["isPopupOpen"] }));
  };

  // Logout user
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("./login");
  };

  return (
    <nav className={className}>
      <p>Kite</p>
      <div className="container--flex">
        <StyledButton
          width="150px"
          height="44px"
          backgroundColor="var(--clr-blue-2)"
          buttonLabel="ADD SPOT"
          fontWeight="700"
          handleClick={openAddSpotForm}
        />
        <div className="user">
          <FaUserCircle
            className="user-icon"
            size={44}
            onClick={handleUserClick}
          />
          {showLogout && (
            <StyledButton
              className="user--logout"
              width="106px"
              height="48px"
              backgroundColor="var(--clr-white-2)"
              boxShadow="0px 0px 8px rgba(0, 0, 0, 0.12), 0px 8px 8px rgba(0, 0, 0, 0.24)"
              borderRadius="2px"
              color="var(--clr-red)"
              fontSize="14px"
              position="absolute"
              right="0"
              handleClick={handleLogout}
              buttonLabel={
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <MdExitToApp size={23} />
                  {"Logout"}
                </div>
              }
            />
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
