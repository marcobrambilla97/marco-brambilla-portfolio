import React from "react";
import Layout from "./src/components/layout/Layout/Layout";
import "./src/styles/global.css";
import "./src/styles/preloader.css"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};