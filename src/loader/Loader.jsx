import React from "react";

export default function Loader() {
  return (
    <div className="container-fluid">
      <div className=" d-flex align-items-center mt-3">
        <div class="spinner-border me-3" role="status"></div>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
