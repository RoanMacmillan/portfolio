import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTopOnRefresh = () => {
  const location = useLocation();

  useEffect(() => {
    if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
      window.scrollTo(0, 0);
    }
  }, [location]);
};

export default useScrollToTopOnRefresh;
