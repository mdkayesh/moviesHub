import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import { useFetch } from "../hooks";
import { useDispatch } from "react-redux";
import { getConfigaration } from "../../store/featureSlice/homeSlice";
import Footer from "../sections/Footer/Footer";

const RootLayout = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    return () => null;
  }, [location.pathname]);

  const { data } = useFetch("/configuration");

  useEffect(() => {
    const url = {
      backDrop: data?.images?.secure_base_url + "original",
      profile: data?.images?.secure_base_url + "original",
      poster: data?.images?.secure_base_url + "original",
    };
    dispatch(getConfigaration(url));
  }, [data, dispatch]);

  return (
    <div className="root-layout">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
