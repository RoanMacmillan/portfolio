import React from "react";
import { useLocation } from "react-router-dom";
import LoadingModal from "../LoadingModal/LoadingModal";

const PageLoadingModal = () => {
  const location = useLocation();
  const [showModal, setShowModal] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname === "/") {
      setShowModal(true);
      // Simulate loading time
      setTimeout(() => {
        setShowModal(false);
      }, 2000);
    } else {
      setShowModal(false);
    }
  }, [location.pathname]);

  return <LoadingModal show={showModal} />;
};

export default PageLoadingModal;