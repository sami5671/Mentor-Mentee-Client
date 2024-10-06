import React from "react";
import { Empty, SearchNotFoundIcon } from "rizzui";

const NotFound = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <Empty
          image={<SearchNotFoundIcon />}
          text="😟Page Not Result Found😟"
          className="text-2xl"
        />
      </div>
    </>
  );
};

export default NotFound;
