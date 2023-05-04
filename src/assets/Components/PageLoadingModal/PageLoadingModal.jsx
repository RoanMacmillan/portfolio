// import React, {useEffect} from "react";
import React, { useEffect, useContext } from "react"; // Import useContext
import { useLocation } from "react-router-dom";
import LoadingModal from "../LoadingModal/LoadingModal";
import { LoadingContext } from "../../../App"; // Import the context

const PageLoadingModal = () => {
  const location = useLocation();
  const { showLoading, setShowLoading } = useContext(LoadingContext); // Get the state and function from the context

  useEffect(() => {
    const pathMatch = /^\/portfolio\/\d+$/.test(location.pathname);

    if (location.pathname === "/") {
      setShowLoading(true);
      // Simulate loading time
      setTimeout(() => {
        setShowLoading(false);
      }, 1250);
    } else {
      setShowLoading(false);
    }
  }, [location.pathname, setShowLoading]);

  return <LoadingModal show={showLoading} />;
};

export default PageLoadingModal;