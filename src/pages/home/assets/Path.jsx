import React, { useContext } from "react";
import { DataContext } from "../../../context/DataContext";

const Path = () => {
  const {
    pathData: { path, color },
    isDesktop,
  } = useContext(DataContext);
  return (
    <>
      {isDesktop && (
        <div
          style={{ color: color }}
          className="fixed left-[5vw] top-[50vh] z-40"
        >
          {path}
        </div>
      )}
    </>
  );
};

export default Path;
