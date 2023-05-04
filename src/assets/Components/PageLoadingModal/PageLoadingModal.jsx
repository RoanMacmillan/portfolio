import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import LoadingModal from "../LoadingModal/LoadingModal";

const PageLoadingModal = () => {
  const location = useLocation();
  const [showModal, setShowModal] = React.useState(false);


  


  React.useEffect(() => {

    const pathMatch = /^\/portfolio\/\d+$/.test(location.pathname);

    if (location.pathname === "/") {
      setShowModal(true);
      // Simulate loading time
      setTimeout(() => {
        setShowModal(false);
      },    1250);
    } else {
      setShowModal(false);
    }
  }, [location.pathname]);


  useEffect(() => {
    if (showModal) {
      document.body.classList.add("noScroll");
    } else {
      document.body.classList.remove("noScroll");
    }
  }, [showModal]);

  return <LoadingModal show={showModal} />;
};

export default PageLoadingModal;