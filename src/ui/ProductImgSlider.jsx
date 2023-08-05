import React from "react";
import { useState } from "react";
import "./ProductImgSlider.css";

const ProductImgSlider = ({ images }) => {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div
      id="ProductImgSlider"
      className="flex items-center justify-evenly mx-auto mb-10 lg:mb-0"
    >
      <div className="imagesHolder mx-3">
        {images.map((img) => {
          return (
            <img
              key={images[images.indexOf(img)]}
              className="rounded-lg shadow-none shadow-gray-500 hover:scale-150 hover:shadow-md transition-all ease-in-out "
              src={img}
              alt=""
              onClick={() => {
                setSelected(img);
              }}
            />
          );
        })}
      </div>
      <div className="mx-3">
      <img className="mainImage rounded-lg hover:scale-150 transition-all ease-in-out" 
      src={selected} 
      alt="" />
      </div>
    </div>
  );
};

export default ProductImgSlider;
