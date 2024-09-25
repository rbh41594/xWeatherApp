import React from "react";

export default function Infocard({ heading, subheading }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{heading}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{subheading}</h6>
      </div>
    </div>
  );
}

