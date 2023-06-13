import React from "react";
import "../sass/root.scss"; // Import your SCSS file
import OrderTable from "./OrderTable";
import OrderTimeLine from "./OrderTimeLine";
export default function page() {
  return (
    <>
      {/* <OrderTable /> */}
      <OrderTimeLine />
    </>
  );
}
