import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import LoadingModal from "../LoadingModal/LoadingModal";

const PageLoadingModal = ({showModal}) => {
  const location = useLocation();


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