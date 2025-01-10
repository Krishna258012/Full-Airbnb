import React from "react";
import "../assets/css/home.css";
import GetUseFetch from "./GetUseFetch";
import { useNavigate } from "react-router-dom";

const Home = ({ apipath }) => {
  const navigate = useNavigate();
  const [productData, isLoading] = GetUseFetch(apipath);
  const fullData = productData?.data;

  if (isLoading) {
    return <div className="home-loading"><div className="newtons-cradle">
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
      <div className="newtons-cradle__dot"></div>
    </div></div>
  }

  return (
    <div className="home-all">
      {fullData &&
        fullData.map((product) => (
          <button key={product._id} className="home-contain" onClick={() => navigate(`/room/${product._id}`)}>
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
