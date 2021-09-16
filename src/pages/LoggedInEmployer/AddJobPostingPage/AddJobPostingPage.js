import React from "react";
import './AddJobPostingPage.css';
import AddJobPosting from "../../../layouts/AddJobPostingLayout/AddJobAdvertisement";
export default function AddJobPostingPage() {
  return (
    <div>
      <div className="container">
        <div className="border-main my-5 shadow">
            <AddJobPosting/>
        </div>
      </div>
    </div>
  );
}