import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomLink = ({ to, setShowModal, onClick, children, handleLinkClick, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (to === "/" && setShowModal) {
      handleLinkClick(to);
      if (location.pathname !== "/") {
        event.preventDefault();
        setShowModal(true);
        setTimeout(() => {
          navigate(to);
          setShowModal(false);
        }, 1250);
      }
    }
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;