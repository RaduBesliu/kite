// React
import React from "react";
import { useState } from "react";

// Libraries
import { useNavigate } from "react-router-dom";

// Components
import { StyledButton } from "../Button/Button.styles";
import { FaUserCircle } from "react-icons/fa";
import { MdExitToApp } from "react-icons/md";

function Navbar({ className }) {
  const [showLogout, setShowLogout] = useState(false);

  const navigate = useNavigate();

  const handleUserClick = () => {
    setShowLogout((value) => !value);
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
          backgroundColor="var(--clr-button-secondary)"
          buttonLabel="ADD SPOT"
          fontWeight="700"
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
              backgroundColor="var(--clr-button-third)"
              boxShadow="0px 0px 8px rgba(0, 0, 0, 0.12), 0px 8px 8px rgba(0, 0, 0, 0.24)"
              borderRadius="2px"
              color="var(--clr-red)"
              fontSize="14px"
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
