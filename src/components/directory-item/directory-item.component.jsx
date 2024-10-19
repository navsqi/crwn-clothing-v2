import React from "react";
import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  return (
    <>
      <div key={category.id} className="category-container">
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${category.imageUrl})`,
          }}
        ></div>
        <div className="category-body-container">
          <h2>{category.title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    </>
  );
};

export default DirectoryItem;
