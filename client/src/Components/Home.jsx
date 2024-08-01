import React from "react";
import "../assets/css/home.css";
import GetUseFetch from "./GetUseFetch";

const Home = ({ apipath }) => {
  const [productData] = GetUseFetch(apipath);
  const fullData = productData?.data;

  return (
    <div className="home-all">
      {fullData &&
        fullData.map((product) => (
          <button key={product._id} className="home-contain">
            <img
              loading="lazy"
              className="home-img"
              src={product.images.picture_url}
              alt="Image Not Found"
            />
            <div>
              {product.name} , {product.address.country}
            </div>
            <div>{product.address.street}</div>
            <div>{product.price.$numberDecimal}$</div>
          </button>
        ))}
    </div>
  );
};
export default Home;
